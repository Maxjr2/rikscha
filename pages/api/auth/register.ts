import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, password, role } = req.body

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email }
    })

    if (existingUser) {
      return res.status(422).json({ message: 'User already exists' })
    }

    // Hash the password
    const hashedPassword = await hash(password, 12)

    // Create the user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    })

    res.status(201).json({ message: 'User created successfully', user: { id: user.id, name: user.name, email: user.email, role: user.role } })
  } catch (error) {
    console.error('Registration error:', error)
    if (error instanceof Error) {
      res.status(500).json({ message: 'Something went wrong', error: error.message })
    } else {
      res.status(500).json({ message: 'An unknown error occurred' })
    }
  } finally {
    await prisma.$disconnect()
  }
}