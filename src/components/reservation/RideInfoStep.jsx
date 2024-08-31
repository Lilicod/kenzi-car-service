import React, { useEffect, useState } from "react";

export default function RideInfoStep({ formData, handleChange, nextStep, setFormData }) {
  const [pickUpAddressList, setPickUpAddressList] = useState([]);
  const [dropOffAddressList, setDropOffAddressList] = useState([]);
  const [isSearching, setIsSearching] = useState({ pickUp: false, dropOff: false });

  useEffect(() => {
    if (isSearching.pickUp) {
      const delayDebounce = setTimeout(() => {
        getAddress(formData.pickUpLocation, setPickUpAddressList);
      }, 1000);

      return () => clearTimeout(delayDebounce);
    }
  }, [formData.pickUpLocation, isSearching.pickUp]);

  useEffect(() => {
    if (isSearching.dropOff) {
      const delayDebounce = setTimeout(() => {
        getAddress(formData.dropOffLocation, setDropOffAddressList);
      }, 1000);

      return () => clearTimeout(delayDebounce);
    }
  }, [formData.dropOffLocation, isSearching.dropOff]);

  const getAddress = async (query, setAddressList) => {
    if (!query) return;
    const res = await fetch(
      "/api/search-address?q=" + query,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setAddressList(data);
  };

  const handleAddressSelection = (selectedAddress, fieldName) => {
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: selectedAddress
    }));
    if (fieldName === 'pickUpLocation') {
      setPickUpAddressList([]);
      setIsSearching(prev => ({ ...prev, pickUp: false }));
    } else {
      setDropOffAddressList([]);
      setIsSearching(prev => ({ ...prev, dropOff: false }));
    }
  };

  const handleInputFocus = (fieldName) => {
    setIsSearching(prev => ({
      ...prev,
      [fieldName === 'pickUpLocation' ? 'pickUp' : 'dropOff']: true
    }));
  };

  const handleInputBlur = () => {
    // Use setTimeout to allow click events on suggestions to fire before hiding the dropdown
    setTimeout(() => {
      setIsSearching({ pickUp: false, dropOff: false });
    }, 200);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium">Step 1: Ride Info</h2>
      <div className="flex flex-col lg:flex-row gap-16">
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
              <option value="" disabled>
                Select Service
              </option>
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
          
          {/* Pick-Up Location */}
          <div className="relative">
            <label htmlFor="pickUpLocation" className="block mb-2">
              Pick-Up Location
            </label>
            <input
              placeholder="Pick-Up Location"
              type="text"
              id="pickUpLocation"
              name="pickUpLocation"
              value={formData.pickUpLocation}
              onChange={handleChange}
              onFocus={() => handleInputFocus('pickUpLocation')}
              onBlur={handleInputBlur}
              className="w-full p-2 border rounded"
            />

            {isSearching.pickUp && pickUpAddressList?.suggestions && (
              <div className="shadow-md p-1 bg-white rounded-md absolute w-full z-10">
                {pickUpAddressList.suggestions.map((suggestion, index) => (
                  <div 
                    key={index}
                    onMouseDown={() => handleAddressSelection(suggestion.full_address, "pickUpLocation")}
                    className="p-3 cursor-pointer hover:bg-gray-100"
                  >
                    {suggestion.full_address}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drop-Off Location */}
          <div className="relative">
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
              onFocus={() => handleInputFocus('dropOffLocation')}
              onBlur={handleInputBlur}
              className="w-full p-2 border rounded"
            />

            {isSearching.dropOff && dropOffAddressList?.suggestions && (
              <div className="shadow-md p-1 bg-white rounded-md absolute w-full z-10">
                {dropOffAddressList.suggestions.map((suggestion, index) => (
                  <div 
                    key={index}
                    onMouseDown={() => handleAddressSelection(suggestion.full_address, "dropOffLocation")}
                    className="p-3 cursor-pointer hover:bg-gray-100"
                  >
                    {suggestion.full_address}
                  </div>
                ))}
              </div>
            )}
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
        <div className="hidden lg:block bg-gray-200 w-1/2 h-96 rounded"></div>
      </div>
    </div>
  );
}