import React from "react";
import Header from "../Header";
import ServiceCard from "../cards/ServiceCard";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <div className="bg-secondary pb-12">
      <Header title={"Our Services"} />
      <div className="flex flex-wrap flex-col md:flex-row lg:flex-row gap-5 max-w-[75rem] mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
      <p className="text-black text-center font-poppins text-2xl font-medium max-w-[60rem] pt-12 mx-auto">
        Whether you're traveling for business, leisure, or a special <br /> occasion,
        our chauffeur-driven limousines ensure you arrive <br /> in style, comfort,
        and on time.
      </p>
      <Link href={"/services"} className="rounded-lg bg-primary font-poppins text-white font-medium py-3 px-6 flex justify-center w-fit mx-auto mt-10">
        Explore More
      </Link>
    </div>
  );
}

const services = [
  {
    name: "Airport Transfers",
    id: "1",
  },
  {
    name: "Corporate & Private Tranportation",
    id: "2",
  },
  {
    name: "Special events",
    id: "3",
  },
  // {
  //   name: "Hourly & Daily",
  //   id: "4",
  // },
];
