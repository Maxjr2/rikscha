import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    try {
      const booking = await prisma.booking.create({
        data: {
          pickupLocation: req.body.pickupLocation,
          dropoffLocation: req.body.dropoffLocation,
          date: new Date(req.body.date),
          time: req.body.time,
          passengers: parseInt(req.body.passengers),
          userId: session.user.id,
        },
      });
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create booking' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}