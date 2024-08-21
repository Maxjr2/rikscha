import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import BookingPage from '../../components/BookingForm/BookingPage';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../../components/BookingForm/MapComponent'), {
  loading: () => <p>Loading map...</p>,
  ssr: false, // Disable server-side rendering for map component
})

const BookRoute: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push('/user/login?callbackUrl=/book/book');
    return null;
  }

  return <BookingPage />;
};

export default BookRoute;