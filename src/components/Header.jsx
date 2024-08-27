import React from "react";

export default function Header({ title }) {
  return (
    <div className="max-w-[75rem] mx-auto py-10 pt-16 mb-4">
      <div className="space-y-5">
        {/* <div className='justify-self-start text-4xl font-medium text-gray-400 bg-red-500'>01</div> */}
        <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl font-medium font-poppins ">
          {title}
        </div>

        <hr className="border-2 border-gray-300 w-1/2 md:w-1/2 lg:w-full mx-auto " />
      </div>
    </div>
  );
}
