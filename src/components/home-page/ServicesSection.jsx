import React from "react";
import Header from "../Header";
import ServiceCard from "../cards/ServiceCard";
import Link from "next/link";
import { services } from "@/utile/lib";

export default function ServicesSection() {
  return (
    <div className="bg-secondary pb-12">
      <Header title={"Our Services"} />
      <div className="flex flex-wrap flex-col md:flex-row lg:flex-row gap-5 max-w-[75rem] mx-auto">
        {services.slice(0, 3).map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
      <p className="hidden lg:block text-black text-center font-poppins text-2xl font-medium max-w-[60rem] pt-12 mx-auto">
        Whether you&apos;re traveling for business, leisure, or a special <br /> occasion,
        our chauffeur-driven limousines ensure you arrive <br /> in style, comfort,
        and on time.
      </p>
      <Link href={"/services"} className="rounded-lg bg-primary font-poppins text-white font-medium py-3 px-6 flex justify-center w-fit mx-auto mt-10">
        Explore More
      </Link>
    </div>
  );
}

