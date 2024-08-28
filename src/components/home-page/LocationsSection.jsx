import React from "react";
import Header from "../Header";
import LocationCard from "../cards/LocationCard";
import Link from "next/link";
import { Locations } from "@/utile/lib";

export default function LocationsSection() {
  return (
    <div className="relative mb-24">
      <Header title={"Locations We Service"} />

      <div className="flex flex-wrap  md:flex-wrap lg:flex-row items-center gap-3 lg:gap-4 max-w-[75rem] mx-auto">
        <div className="hidden lg:block lg:flex lg:justify-start lg:flex-col">
          <p className=" text-black text-start font-poppins text-xl font-medium max-w-[32rem] pt-12 mx-auto">
            We proudly offer our transportation services across a wide range of
            locations, 
            ensuring you have a comfortable and stress-free journey wherever you
            go. Contact us today to see how we can meet your transportation
            needs in your area!
          </p>
          <a
            target="_blank"
            href={"https://maps.app.goo.gl/Y8dyHJ59dDMi4JxG7"}
            className="rounded-lg bg-primary font-poppins text-white font-medium py-3 px-6 w-fit mx-auto mt-10"
          >
            View in Map
          </a>
        </div>
        {Locations.map((location) => (
          <LocationCard key={location.id} {...location} />
        ))}
      </div>
      <a
        target="_blank"
        href={"https://maps.app.goo.gl/Y8dyHJ59dDMi4JxG7"}
        className="lg:hidden block rounded-lg bg-primary font-poppins text-white flex mx-auto font-medium py-3 px-6 w-fit mx-auto mt-10"
      >
        View in Map
      </a>
    </div>
  );
}
