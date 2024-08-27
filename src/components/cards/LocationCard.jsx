import React from "react";

export default function LocationCard({ name, image }) {
  return (
    <div className="relative lg:w-[150px] md:w-[000px] w-[200px] mx-auto ">

      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="relative rounded-xl lg:w-[150px] md:w-[200px] w-[200px]  lg:h-[500px] md:h-[300px] h-[300px] bg-cover bg-center"
      ></div>
          <div className="text-black absolute top-3 left-3 bg-white rounded-2xl font-poppins font-medium py-1 px-3">{name} </div>
    </div>
  );
}
