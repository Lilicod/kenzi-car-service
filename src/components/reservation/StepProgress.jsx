import React from "react";

export default function StepProgress({ step }) {
  const steps = [
    { number: 1, title: "Ride Info" },
    { number: 2, title: "Select Vehicle" },
    { number: 3, title: "Final Details" },
    { number: 4, title: "Payment/Quote" },
  ];

  return (
    <div className="flex justify-between items-center mb-8">
      {steps.map((s) => (
        <div key={s.number} className="flex items-center">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step >= s.number
                ? "bg-primary text-white"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            {s.number}
          </div>
          {s.number < steps.length && (
            <div
              className={`flex-1 h-1 ${
                step > s.number ? "bg-primary" : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
