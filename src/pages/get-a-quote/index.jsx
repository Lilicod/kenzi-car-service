import React, { useState } from "react";
import Banner from "@/components/Banner";
import Layout from "@/layout/Layout";
import FinalDetailsStep from "@/components/reservation/FinalDetailsStep";
import SelectVehicleStep from "@/components/reservation/SelectVehicleStep";
import RideInfoStep from "@/components/reservation/RideInfoStep";
import StepProgress from "@/components/reservation/StepProgress";
import Payment from "@/components/reservation/Payment";

export default function GetAQuote() {
  // State to track the current step
  const [step, setStep] = useState(1);

  // State to store form data
  const [formData, setFormData] = useState({
    serviceType: "",
    pickUpDate: "",
    pickUpTime: "",
    pickUpLocation: "",
    stops: [],
    dropOffLocation: "",
    passengers: "",
    luggageCount: "",
    vehicleType: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to validate the current step
  const validateStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        return formData.serviceType && formData.pickUpDate && formData.pickUpTime && 
               formData.pickUpLocation && formData.dropOffLocation && 
               formData.passengers && formData.luggageCount;
      case 2:
        return formData.vehicleType;
      case 3:
        return formData.firstName && formData.lastName && formData.phone && formData.email;
      default:
        return true;
    }
  };

  // Function to go to the next step
  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    } else {
      alert("Please fill in all required fields before proceeding.");
    }
  };

  // Function to go to the previous step
  const prevStep = () => setStep(step - 1);

  // Function to handle form submission (booking or quote request)
  const handleSubmit = () => {
    if (step === 4) {
      // If step 4, handle booking or quote request logic here
      console.log("Form Submitted: ", formData);
    }
  };

  return (
    <Layout>
      <Banner header={"Book a Ride"} image={"fleet2.jpeg"} />
      <div className="font-poppins max-w-[75rem] mx-auto py-8 px-4">
        {/* Step Progress Indicator */}
        <StepProgress step={step} />

        {/* Render components based on current step */}
        {step === 1 && (
          <RideInfoStep
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            setFormData={setFormData}
          />
        )}
        {step === 2 && (
          <SelectVehicleStep
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <FinalDetailsStep
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 4 && (
          <Payment
            formData={formData}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        )}
      </div>
    </Layout>
  );
}