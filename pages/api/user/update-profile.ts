import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import prisma from '../../../lib/prisma'
import { ErrorHandler } from '../../../lib/errorHandler'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const { name, email } = req.body

    if (!name || !email) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: { name, email },
      select: { id: true, name: true, email: true, role: true }
    })

    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser })
  } catch (error) {
    ErrorHandler.handle(error, res)
  }
}
