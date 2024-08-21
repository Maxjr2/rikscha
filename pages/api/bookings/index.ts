import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import prisma from '../../../lib/prisma'
import { ErrorHandler } from '../../../lib/errorHandler'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    switch (req.method) {
      case 'POST':
        return await createBooking(req, res, session.user.id)
      case 'GET':
        return await getBookings(req, res, session.user.id)
      default:
        res.setHeader('Allow', ['POST', 'GET'])
        return res.status(405).json({ message: `Method ${req.method} Not Allowed` })
    }
  } catch (error) {
    ErrorHandler.handle(error, res)
  }
}

async function createBooking(req: NextApiRequest, res: NextApiResponse, userId: string) {
  const { pickupLocation, dropoffLocation, date, time, passengers } = req.body

  if (!pickupLocation || !dropoffLocation || !date || !time || !passengers) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  const booking = await prisma.booking.create({
    data: {
      pickupLocation,
      dropoffLocation,
      date: new Date(date),
      time,
      passengers: parseInt(passengers),
      userId,
    },
  })

  res.status(201).json({ message: 'Booking created successfully', booking })
}

async function getBookings(req: NextApiRequest, res: NextApiResponse, userId: string) {
  const bookings = await prisma.booking.findMany({
    where: { userId },
    orderBy: { date: 'desc' },
  })

  res.status(200).json(bookings)
}