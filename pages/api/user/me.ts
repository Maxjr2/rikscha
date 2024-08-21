import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import prisma from '../../../lib/prisma'
import { ErrorHandler } from '../../../lib/errorHandler'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { id: true, name: true, email: true, role: true }
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json(user)
  } catch (error) {
    ErrorHandler.handle(error, res)
  }
}