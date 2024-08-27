import React from "react";
import Header from "../Header";
import LocationCard from "../cards/LocationCard";
import Link from "next/link";

export default function LocationsSection() {
  return (
    <div className="relative mb-24">
      <Header title={"Locations We Service"} />

      <div className="flex flex-wrap  md:flex-wrap lg:flex-row items-center gap-3 lg:gap-4 max-w-[75rem] mx-auto">
        <div className="hidden lg:block lg:flex lg:justify-start lg:flex-col">
          <p className=" text-black text-start font-poppins text-xl font-medium max-w-[32rem] pt-12 mx-auto">
            Experience the height of kury and ‘Comvenience wih LureRide's
            imausine sence top cities around he wild Contact us today obook your
            ide and score the utimate hry bansportaton wih Live Ride.
          </p>
          <Link
            href={"/services"}
            className="rounded-lg bg-primary font-poppins text-white font-medium py-3 px-6 w-fit mx-auto mt-10"
          >
            Explore More
          </Link>
        </div>
        {Locations.map((location) => (
          <LocationCard key={location.id} {...location} />
        ))}
      </div>
    </div>
  );
}

const Locations = [
  {
    name: "Palm Beach",
    id: "1",
    image: "/palm.jpeg",
  },
  {
    name: "Miami",
    id: "2",
    image: "/miami.jpeg",
  },
  {
    name: "Ft Lauderdale",
    id: "3",
    image: "/fort.jpeg",
  },
  {
    name: "Boca Raton",
    id: "4",
    image: "/boca.jpeg",
  },
];
