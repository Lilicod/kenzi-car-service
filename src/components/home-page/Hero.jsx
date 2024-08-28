import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(/fleet5.jpeg)`,
        }}
        className="h-[100vh] bg-cover bg-center relative"
      ></div>
      <div className="absolute inset-0 h-[100vh] bg-black opacity-40"></div>
      <div className="absolute bottom-8 lg:bottom-16  bg- text-white gap-4 px-8 lg:px-45 md:px-44 h-full w-full flex flex-col justify-center items-center lg:items-start">
        <h2 className="text-4xl lg:text-5xl font-medium font-poppins lg:text-start text-center">
          Ride in Comfort and Style
        </h2>
        <p className="text-lg lg:text-xl font-normal lg:font-normal max-w-3xl font-poppins text-center lg:text-start">
          From airport transfers to special events, we provide safe, reliable,
          and luxurious transportation services tailored to your needs.
        </p>
        <Link
          href={"/get-a-quote"}
          className="rounded-lg bg-primary font-poppins text-lg text-white font-medium py-2 px-5 flex justify-start w-fit"
        >
          Reserve Now
        </Link>
      </div>
    </div>
  );
}
