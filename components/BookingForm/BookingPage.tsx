import React, { useState } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import BookingForm from './BookingForm';
import MapComponent from './MapComponent';

interface Location {
  address: string;
  coordinates: [number, number];
}

const BookingPage: React.FC = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [pickupLocation, setPickupLocation] = useState<Location | null>(null);
  const [dropoffLocation, setDropoffLocation] = useState<Location | null>(null);
  const [activeMarker, setActiveMarker] = useState<'pickup' | 'dropoff'>('pickup');

  const handleLocationSelect = (locationType: 'pickup' | 'dropoff', location: Location) => {
    if (locationType === 'pickup') {
      setPickupLocation(location);
    } else {
      setDropoffLocation(location);
    }
    // Toggle the active marker after selection
    setActiveMarker(locationType === 'pickup' ? 'dropoff' : 'pickup');
  };

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
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <BookingForm 
              userId={userId}
              pickupLocation={pickupLocation}
              dropoffLocation={dropoffLocation}
              onLocationSelect={handleLocationSelect}
              activeMarker={activeMarker}
              setActiveMarker={setActiveMarker}
            />
          </div>
          <div className="w-full md:w-2/3">
            <MapComponent
              pickupLocation={pickupLocation}
              dropoffLocation={dropoffLocation}
              onLocationSelect={handleLocationSelect}
              activeMarker={activeMarker}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default BookingPage;