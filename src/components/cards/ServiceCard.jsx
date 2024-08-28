import Link from "next/link";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

export default function ServiceCard({ name, id, image }) {
  return (
    <div className="relative mx-auto hover:scale-105 transition-all">
      <div
        style={{
          backgroundImage: `url(/${image})`,
        }}
        className="lg:h-72 lg:w-96 h-72 w-80 rounded-xl bg-cover bg-center relative"
      ></div>
      <div className="absolute inset-0 rounded-lg bg-black opacity-40"></div>
      <Link href={`/services/${id}`}>
        {" "}
        <div className="text-black absolute top-3 left-3 bg-white rounded-lg font-poppins font-medium py-1 px-3">
          {name}{" "}
        </div>{" "}
      </Link>
      <Link href={`/services/${id}`}>
        <div className="text-white absolute bottom-3 right-3  font-poppins font-light flex items-center gap-2 hover:underline">
          Explore More{" "}
          <LuArrowUpRight className="bg-white text-black rounded-full w-10 h-10 p-2 " />
        </div>
      </Link>
    </div>
  );
}
