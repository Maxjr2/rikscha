import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type BookingFormData = {
  pickupLocation: string;
  dropoffLocation: string;
  date: Date;
  time: string;
  passengers: number;
};

interface BookingFormProps {
  userId: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ userId }) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<BookingFormData>();
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: BookingFormData) => {
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to create booking');
      }

      // Handle successful booking (e.g., show confirmation, redirect)
    } catch (error) {
      setServerError('An error occurred. Please try again.');
    }
  };

  // Rest of the component remains the same
};

export default BookingForm;