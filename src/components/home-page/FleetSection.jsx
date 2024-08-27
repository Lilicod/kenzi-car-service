import React from "react";
import Header from "../Header";
import FleetCard from "../cards/FleetCard";

export default function FleetSection() {
  return (
    <>
      <Header title={"Our Fleet"} />
      <div className="flex flex-col lg:flex-row gap-5 max-w-[75rem] mx-auto">
        {fleets.map((fleet) => (
          <FleetCard key={fleet.id} {...fleet} />
        ))}
      </div>
    </>
  );
}

const fleets = [
  {
    name: "SUV Chevrolet",
    id: "1",
  },
  {
    name: "SUV Chevrolet",
    id: "2",
  },
  
];
