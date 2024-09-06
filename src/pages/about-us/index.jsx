import Banner from "@/components/Banner";
import LocationsSection from "@/components/home-page/LocationsSection";
import Layout from "@/layout/Layout";
import Link from "next/link";
import React from "react";

export default function AboutUs() {
  return (
    <Layout>
      <Banner header={"About Us"} image={"suv.jpg"} />
      <div className="flex flex-col gap-5 max-w-[75rem] mx-auto pt-10 px-5">
        <p className="text-xl font-poppins font medium ">
          From airport transfers to special events, we provide safe, reliable,
          and luxurious transportation services tailored to your needs. With our
          commitment to exceptional service and comfort, you can trust us to get
          you to your destination on time and in style. Book now and experience
          the difference with our top-rated car and limo services!
        </p>
        <Link
          href={"/get-a-quote"}
          className="rounded-lg bg-primary font-poppins text-white font-medium py-3 px-6 flex justify-center w-fit mx-auto lg:mx-0 mt-0"
        >
          Reserve Now
        </Link>
      </div>
      <LocationsSection />
    </Layout>
  );
}
