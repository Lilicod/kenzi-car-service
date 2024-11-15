import Link from "next/link";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

export default function FleetCard({ type }) {
  return (
    <div className="relative lg:w-[600px] md:w-[600px] w-[350px] mx-auto  ">
      <div
        style={{
          backgroundImage: `url(/fleet.png)`,
        }}
        className="relative rounded-xl bg-secondary lg:w-[600px] md:w-[600px] w-[350px]  lg:h-[400px] md:h-[400px] h-[300px] bg-cover bg-center"
      ></div>
      <div className="text-black absolute top-3 right-3 font-poppins font-medium ">
        {type}{" "}
      </div>
      <Link href={"/fleet"}>

      <div className="text-black absolute bottom-3 right-3  font-poppins font-light flex items-center gap-2 hover:underline">Explore More <LuArrowUpRight className="bg-primary text-black rounded-full w-10 h-10 p-2 " /></div>
      </Link>
    </div>
  );
}
