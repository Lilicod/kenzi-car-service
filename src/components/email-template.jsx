import React from "react";

export default function EmailTemplate({
  serviceType,
  pickUpDate,
  pickUpTime,
  pickUpLocation,
  stops,
  dropOffLocation,
  passengers,
  luggageCount,
  vehicleType,
  passengerName,
  passengerEmail,
  passengerPhone,
}) {
  return (
    <div>
      <p>A customer has requested a quote for a ride. Here are the details:</p>
      <ul>
        <li>
          <strong>Service Type:</strong> {serviceType}
        </li>
        <li>
          <strong>Pick-Up Date:</strong> {pickUpDate}
        </li>
        <li>
          <strong>Pick-Up Time:</strong> {pickUpTime}
        </li>
        <li>
          <strong>Pick-Up Location:</strong> {pickUpLocation}
        </li>
        <li>
          <strong>Drop-Off Location:</strong> {dropOffLocation}
        </li>
        <li>
          <strong>Number of Passengers:</strong> {passengers}
        </li>
        <li>
          <strong>Luggage Count:</strong> {luggageCount}
        </li>
        <li>
          <strong>Selected Vehicle:</strong> {vehicleType}
        </li>
        <li>
          <strong>Name:</strong> {passengerName}
        </li>
        <li>
          <strong>Email:</strong> {passengerEmail}
        </li>
        <li>
          <strong>Phone Number:</strong> {passengerPhone}
        </li>
      </ul>
    </div>
  );
}
