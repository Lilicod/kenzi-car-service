import { CoordinatesContext } from '@/context/CoordinatesContext';
import React, { useContext } from 'react';

export default function Payment({ formData, handleSubmit, prevStep }) {
  // Example function to improve the service type display
  const { directionData } = useContext(CoordinatesContext);
  
  const getFormattedServiceType = (serviceType) => {
    switch (serviceType) {
      case 'fromAirport':
        return 'From Airport';
      case 'toAirport':
        return 'To Airport';
      case 'pointToPoint':
        return 'Point-to-Point';
      case 'hourly':
        return 'Hourly Service';
      default:
        return serviceType; 
    }
  };


  const calculateFinalPrice = () => {
    
    let vehicleMultiplier = formData.vehicleType === 'SUV' ? 1.5 : 1; // Example multiplier for SUV
    let distance = directionData?.routes[0]?.distance*0.000621371192; // convert to miles
    let finalPrice =  distance * vehicleMultiplier;
    return finalPrice.toFixed(2); // Format to 2 decimal places
  };

  const finalPrice = calculateFinalPrice(); // Calculate the final price

  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-medium'>Step 4: Review and Payment</h2>

      {/* Display all the reservation details */}
      <div className='border p-4 rounded-lg'>
        <h3 className='font-semibold'>Reservation Summary</h3>
        <p><strong>Service Type:</strong> {getFormattedServiceType(formData.serviceType)}</p> {/* Improved display */}
        <p><strong>Pick-Up Date:</strong> {formData.pickUpDate}</p>
        <p><strong>Pick-Up Time:</strong> {formData.pickUpTime}</p>
        <p><strong>Pick-Up Location:</strong> {formData.pickUpLocation}</p>
        
        {formData.stops.length > 0 && (
          <div>
            <strong>Stops:</strong>
            <ul>
              {formData.stops.map((stop, index) => (
                <li key={index}>{stop.location}</li>
              ))}
            </ul>
          </div>
        )}

        <p><strong>Drop-Off Location:</strong> {formData.dropOffLocation}</p>
        <p><strong>Number of Passengers:</strong> {formData.passengers}</p>
        <p><strong>Luggage Count:</strong> {formData.luggageCount}</p>
        <p><strong>Selected Vehicle:</strong> {formData.vehicleType}</p>
      </div>

      {/* Display the final price */}
      <div className='bg-white p-4 rounded-lg'>
        <h3 className='text-lg font-semibold'>Final Price: ${finalPrice}</h3>
      </div>

      {/* Action buttons */}
      <div className='flex gap-4 mt-4'>
      <button onClick={prevStep} className='bg-gray-500 text-white px-4 py-2 rounded'>
        Previous
      </button>
        <button
          onClick={() => handleSubmit('book')}
          className='bg-primary text-white px-4 py-2 rounded'
        >
          Book Now
        </button>
      </div>

      
    </div>
  );
}
