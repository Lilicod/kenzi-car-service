import { CoordinatesContext } from "@/context/CoordinatesContext";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

export default function Payment({ formData, handleSubmit, prevStep }) {
  const { directionData } = useContext(CoordinatesContext);
  const [notification, setNotification] = useState(""); 
  const [isSending, setIsSending] = useState(false); 

  const getFormattedServiceType = (serviceType) => {
    switch (serviceType) {
      case "fromAirport":
        return "From Airport";
      case "toAirport":
        return "To Airport";
      case "pointToPoint":
        return "Point-to-Point";
      case "hourly":
        return "Hourly Service";
      default:
        return serviceType;
    }
  };

  const calculateFinalPrice = () => {
    let vehicleMultiplier = formData.vehicleType === "SUV" ? 1.5 : 1;
    let distance = directionData?.routes[0]?.distance * 0.000621371192; // convert to miles
    let finalPrice = distance * vehicleMultiplier;
    return finalPrice.toFixed(2);
  };

  const finalPrice = calculateFinalPrice();

  const sendQuoteEmail = async () => {
    setIsSending(true);
    
    const emailData = {
      serviceType: getFormattedServiceType(formData.serviceType),
      pickUpDate: formData.pickUpDate,
      pickUpTime: formData.pickUpTime,
      pickUpLocation: formData.pickUpLocation,
      stops: formData.stops,
      dropOffLocation: formData.dropOffLocation,
      passengers: formData.passengers,
      luggageCount: formData.luggageCount,
      vehicleType: formData.vehicleType,
      finalPrice: finalPrice,
      passengerName: formData.firstName + " " + formData.lastName,
      passengerEmail: formData.email,
      passengerPhone: formData.phone,
    };

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        toast.success("Request sent successfully! you'll be contacted soon.");
        setNotification("Request sent successfully! you'll be contacted soon.");
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email. Please try again later.");
    } finally {
      setIsSending(false); 
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium">Step 4: Review and Pricing</h2>

      <div className="border p-4 rounded-lg">
        <h3 className="font-semibold">Reservation Summary</h3>
        <p>
          <strong>Service Type:</strong> {getFormattedServiceType(formData.serviceType)}
        </p>
        <p>
          <strong>Pick-Up Date:</strong> {formData.pickUpDate}
        </p>
        <p>
          <strong>Pick-Up Time:</strong> {formData.pickUpTime}
        </p>
        <p>
          <strong>Pick-Up Location:</strong> {formData.pickUpLocation}
        </p>
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
        <p>
          <strong>Drop-Off Location:</strong> {formData.dropOffLocation}
        </p>
        <p>
          <strong>Number of Passengers:</strong> {formData.passengers}
        </p>
        <p>
          <strong>Luggage Count:</strong> {formData.luggageCount}
        </p>
        <p>
          <strong>Selected Vehicle:</strong> {formData.vehicleType}
        </p>
      </div>

      {/* {directionData ? (
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Final Price: ${finalPrice}</h3>
        </div>
      ) : (
        <p className="text-red-500">
          Please select a valid pickup and drop-off location from the map to see the price.
        </p>
      )} */}

      {notification && (
        <div className="mt-4 p-2 text-center text-white bg-green-500 rounded">
          {notification}
        </div>
      )}

      <div className="flex gap-4 mt-4">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        {/* <button
          disabled={!directionData || isSending}
          onClick={() => handleSubmit(finalPrice)}
          className="bg-primary text-white px-4 py-2 rounded disabled:cursor-not-allowed"
        >
          Book Now
        </button> */}
        <button
          onClick={sendQuoteEmail} // onClick handler to send email
          className="bg-primary text-white px-4 py-2 rounded disabled:cursor-not-allowed"
          disabled={isSending} // Disable button while sending email
        >
         {isSending ? "Sending..." : "Get a quote"}
        </button>
      </div>
    </div>
  );
}
