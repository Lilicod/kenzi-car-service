import Link from "next/link";
import React from "react";

export default function Banner({ image, header, text }) {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(/${image ? image : "1.png"})`,
        }}
        className="h-[45vh] bg-cover bg-center flex items-center relative"
      >
        <div className="absolute inset-0 h-[45vh] bg-black opacity-50"></div>
        <div className="absolute top-8 lg:top-8 bg- text-white gap-4 px-8 lg:px-45 md:px-44 h-full w-full flex flex-col justify-center items-center lg:items-center">
          <h2 className="text-4xl lg:text-5xl font-medium font-poppins">
            {header}
          </h2>
          <p className="text-lg lg:text-xl font-normal lg:font-normal max-w-3xl font-poppins text-center lg:text-center">
            {text}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
