import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const { name, email } = req.body

  try {
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { name, email },
    })

    res.status(200).json(updatedUser)
  } catch (error) {
    console.error('Profile update error:', error)
    res.status(500).json({ message: 'Failed to update profile' })
  }
}