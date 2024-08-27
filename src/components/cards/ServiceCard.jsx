import Link from "next/link";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

export default function ServiceCard( {name} ) {
  return (
    <div className="relative mx-auto">
      <div
        style={{
          backgroundImage: `url(/1.png)`,
        }}
        className="lg:h-72 lg:w-96 h-72 w-80 rounded-xl bg-cover bg-center relative"
      ></div>
      <div className="text-black absolute top-3 left-3 bg-white rounded-lg font-poppins font-medium py-1 px-3">{name} </div>
    <Link href={"/"}>
    
    <div className="text-white absolute bottom-3 right-3  font-poppins font-light flex items-center gap-2 hover:underline">Explore More <LuArrowUpRight className="bg-white text-black rounded-full w-10 h-10 p-2 " /></div>
    </Link>  
    </div>
  );
}
