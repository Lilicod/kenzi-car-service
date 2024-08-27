import Link from "next/link";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

export default function FleetCard({ name }) {
  return (
    <div className="relative lg:w-[600px] md:w-[600px] w-[400px] mx-auto  ">
      <div
        style={{
          backgroundImage: `url(/fleet.png)`,
        }}
        className="relative rounded-xl bg-secondary lg:w-[600px] md:w-[600px] w-[400px]  lg:h-[400px] md:h-[400px] h-[300px] bg-cover bg-center"
      ></div>
      <div className="text-black absolute top-3 right-3 font-poppins font-medium ">
        {name}{" "}
      </div>
      <Link href={"/"}>

      <div className="text-black absolute bottom-3 right-3  font-poppins font-light flex items-center gap-2 hover:underline">Explore More <LuArrowUpRight className="bg-primary text-black rounded-full w-10 h-10 p-2 " /></div>
      </Link>
    </div>
    //     <div className="relative h-72 w-[26rem] rounded-xl bg-secondary">
    //     <div
    //   style={{
    //     backgroundImage: `url(/fleet.png)`,
    //   }}
    //       className="h-72 w-[23rem]  bg-cover bg-center relative "
    //     ></div>
    //     <div className="text-black absolute top-3 left-3 font-poppins font-medium ">{name} </div>
    //   <Link href={"/"}>

    //   <div className="text-black absolute bottom-3 right-3  font-poppins font-light flex items-center gap-2 hover:underline">Explore More <LuArrowUpRight className="bg-primary text-black rounded-full w-8 h-8 p-1 " /></div>
    //   </Link>
    //   </div>
  );
}
