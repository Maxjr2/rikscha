import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Location {
  address: string;
  coordinates: [number, number];
}

interface BookingFormProps {
  userId: string;
  pickupLocation: Location | null;
  dropoffLocation: Location | null;
  onLocationSelect: (locationType: 'pickup' | 'dropoff', location: Location) => void;
  activeMarker: 'pickup' | 'dropoff';
  setActiveMarker: (marker: 'pickup' | 'dropoff') => void;
}

type BookingFormData = {
  pickupLocation: string;
  dropoffLocation: string;
  date: Date;
  passengers: number;
};

const BookingForm: React.FC<BookingFormProps> = ({ 
  userId, 
  pickupLocation, 
  dropoffLocation, 
  onLocationSelect,
  activeMarker,
  setActiveMarker
}) => {
  const { register, control, handleSubmit, setValue, formState: { errors } } = useForm<BookingFormData>();

  React.useEffect(() => {
    if (pickupLocation) {
      setValue('pickupLocation', pickupLocation.address);
    }
    if (dropoffLocation) {
      setValue('dropoffLocation', dropoffLocation.address);
    }
  }, [pickupLocation, dropoffLocation, setValue]);

  const onSubmit = async (data: BookingFormData) => {
    // Here you would send the booking data to your API
    console.log('Booking submitted:', { ...data, userId });
  };

  const handleInputFocus = (locationType: 'pickup' | 'dropoff') => {
    setActiveMarker(locationType);
  };

  const handleInputChange = (locationType: 'pickup' | 'dropoff', value: string) => {
    // This function would typically involve geocoding the input to get coordinates
    // For now, we'll just update the form value
    setValue(locationType === 'pickup' ? 'pickupLocation' : 'dropoffLocation', value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="pickupLocation" className="block text-sm font-medium text-federal-blue">
          Pickup Location
        </label>
        <input
          id="pickupLocation"
          {...register('pickupLocation', { required: 'Pickup location is required' })}
          className={`form-input mt-1 ${activeMarker === 'pickup' ? 'ring-2 ring-forest-green' : ''}`}
          placeholder="Enter pickup location"
          onFocus={() => handleInputFocus('pickup')}
          onChange={(e) => handleInputChange('pickup', e.target.value)}
        />
        {errors.pickupLocation && <p className="mt-1 text-imperial-red">{errors.pickupLocation.message}</p>}
      </div>

      <div>
        <label htmlFor="dropoffLocation" className="block text-sm font-medium text-federal-blue">
          Dropoff Location
        </label>
        <input
          id="dropoffLocation"
          {...register('dropoffLocation', { required: 'Dropoff location is required' })}
          className={`form-input mt-1 ${activeMarker === 'dropoff' ? 'ring-2 ring-forest-green' : ''}`}
          placeholder="Enter dropoff location"
          onFocus={() => handleInputFocus('dropoff')}
          onChange={(e) => handleInputChange('dropoff', e.target.value)}
        />
        {errors.dropoffLocation && <p className="mt-1 text-imperial-red">{errors.dropoffLocation.message}</p>}
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-federal-blue">
          Date
        </label>
        <Controller
          name="date"
          control={control}
          rules={{ required: 'Date is required' }}
          render={({ field }) => (
            <DatePicker
              id="date"
              selected={field.value}
              onChange={(date: Date | null) => field.onChange(date)}
              className="form-input mt-1 w-full"
              placeholderText="Select date"
            />
          )}
        />
        {errors.date && <p className="mt-1 text-imperial-red">{errors.date.message}</p>}
      </div>

      <div>
        <label htmlFor="passengers" className="block text-sm font-medium text-federal-blue">
          Number of Passengers
        </label>
        <input
          id="passengers"
          type="number"
          {...register('passengers', { 
            required: 'Number of passengers is required', 
            min: { value: 1, message: 'Minimum 1 passenger' },
            max: { value: 8, message: 'Maximum 8 passengers' }
          })}
          className="form-input mt-1"
          placeholder="Enter number of passengers"
        />
        {errors.passengers && <p className="mt-1 text-imperial-red">{errors.passengers.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;