import { fleets } from "@/utile/lib";
import React from "react";

export default function SelectVehicleStep({
  formData,
  handleChange,
  nextStep,
  prevStep,
}) {
  // Function to handle vehicle selection
  const handleVehicleSelect = (vehicleType) => {
    handleChange({ target: { name: "vehicleType", value: vehicleType } });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium">Step 2: Select Vehicle</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleets.map((vehicle) => (
          <div
            key={vehicle.id}
            className={`border p-4 rounded-lg cursor-pointer ${
              formData.vehicleType === vehicle.type ? "border-primary border-2" : ""
            }`}
            onClick={() => handleVehicleSelect(vehicle.type)}
          >
            <div
        style={{
          backgroundImage: `url(${vehicle.image})`,
        }}
        className=" bg-cover bg-center h-48 "
      ></div>
            {/* <img
              src={vehicle.image}
              alt={vehicle.type}
              className="w-full h-40 object-cover rounded-lg"
            /> */}
            <h3 className="text-lg font-semibold mt-4">{vehicle.type}</h3>
            <p className="text-gray-600">{vehicle.description}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          className="bg-primary text-white px-4 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
