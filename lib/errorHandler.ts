import { NextApiResponse } from 'next'
import { Prisma } from '@prisma/client'

export class ErrorHandler {
  static handle(error: unknown, res: NextApiResponse) {
    console.error('API Error:', error)

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res.status(400).json({ message: 'Database error', error: error.message })
    }

    if (error instanceof Error) {
      return res.status(500).json({ message: 'Internal server error', error: error.message })
    }

    return res.status(500).json({ message: 'An unknown error occurred' })
  }
}