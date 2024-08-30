import React from "react";

export default function RideInfoStep({ formData, handleChange, nextStep }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium">Step 1: Ride Info</h2>
      <div className="flex flex-col lg:flex-row gap-16 bg- red-500 ">

        <div className="w- space-y-6">
        <div>
          <label htmlFor="serviceType" className="block mb-2">
            Select Service Type
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={`w-full p-2 border rounded`}
          >
            <option value=""  disabled>Select Service</option>
            <option value="fromAirport">From Airport</option>
            <option value="toAirport">To Airport</option>
            <option value="pointToPoint">Point To Point</option>
            <option value="hourly">Hourly</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div>
            <label htmlFor="pickUpDate" className="block mb-2">
              Pick-Up Date
            </label>
            <input
              type="date"
              id="pickUpDate"
              name="pickUpDate"
              value={formData.pickUpDate}
              onChange={handleChange}
              className={`w-full p-2 border rounded`}
            />
          </div>
          <div>
            <label htmlFor="pickUpTime" className="block mb-2">
              Pick-Up Time
            </label>
            <input
              type="time"
              id="pickUpTime"
              name="pickUpTime"
              value={formData.pickUpTime}
              onChange={handleChange}
              className={`w-full p-2 border rounded`}
            />
          </div>
        </div>

        {/* Location */}

        <div>
          <label htmlFor="pickUpLocation" className="block mb-2">
            Pick-Up Location
          </label>
          <input
            placeholder="Pick-Up Location"
            type="text"
            id="pickUpLocation"
            name="pickUpLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            className={`w-full p-2 border rounded`}
          />
        </div>

        {/* Add Stop Logic */}

        <div>
          <label htmlFor="dropOffLocation" className="block mb-2">
            Drop-Off Location
          </label>
          <input
            type="text"
            placeholder="Drop-Off Location"
            id="dropOffLocation"
            name="dropOffLocation"
            value={formData.dropOffLocation}
            onChange={handleChange}
            className={`w-full p-2 border rounded`}
          />
        </div>

        {/* Passengers AND Luggage */}

        <div className="flex flex-col lg:flex-row gap-4">
          <div>
            <label htmlFor="passengers" className="block mb-2">
              Number of Passengers
            </label>
            <input
              type="number"
              //    placeholder="Number of Passengers"
              id="passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              className={`w-full p-2 border rounded`}
              min="0"
            />
          </div>

          <div>
            <label htmlFor="luggageCount" className="block mb-2">
              Luggage Count
            </label>
            <input
              type="number"
              //   placeholder="Luggage Count"
              id="luggageCount"
              name="luggageCount"
              value={formData.luggageCount}
              onChange={handleChange}
              className={`w-full p-2 border rounded`}
              min="0"
            />
          </div>
        </div>

        <button
          onClick={nextStep}
          className="bg-primary text-white px-4 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
      <div className="hidden lg:block bg-gray-200 w-1/2 h-96 rounded">
        
      </div>
        </div>
       

      
    </div>
  );
}
