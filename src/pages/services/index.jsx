import Banner from "@/components/Banner";
import ServiceCard from "@/components/cards/ServiceCard";
import LocationsSection from "@/components/home-page/LocationsSection";
import ServicesSection from "@/components/home-page/ServicesSection";
import Layout from "@/layout/Layout";
import { services } from "@/utile/lib";
import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <Layout>
      <Banner
        image={"services.jpeg"}
        header="Services"
        text="We offer a wide range of services to meet your needs. Contact us today to learn more about our services and how we can help you."
      ></Banner>
      <div className="bg- pb-4 pt-10 lg:pb-12 lg:pt-16 ">
        <div className="flex flex-wrap flex-col md:flex-row lg:flex-row gap-5 max-w-[75rem] mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <Link
          href={"/get-a-quote"}
          className="rounded-lg bg-primary font-poppins text-white font-medium py-3 px-6 flex justify-center w-fit mx-auto mt-10"
        >
          Reserve Now
        </Link>
      </div>
      <LocationsSection />
    </Layout>
  );
}
