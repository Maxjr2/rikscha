import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import BookingPage from '../../components/BookingForm/BookingPage';

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