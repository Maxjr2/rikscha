import React from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import BookingForm from './BookingForm';

const BookingPage: React.FC = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  if (!userId) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-federal-blue">Error</h1>
        <p>Unable to retrieve user information. Please try logging in again.</p>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>Book a Ride - Booking Platform</title>
        <meta name="description" content="Book your ride easily in Düsseldorf and surrounding areas" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-federal-blue">Book Your Ride</h1>
        <div className="max-w-md mx-auto">
          <BookingForm userId={userId} />
        </div>
      </main>
    </>
  );
};

export default BookingPage;