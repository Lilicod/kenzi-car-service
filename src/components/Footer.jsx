import Image from "next/image";
import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-black w-full dark:bg-neutral-950">
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-2 space-y-4">
            <Link className="" href="/">
              <Image height={300} width={300} src="/1.png" />
            </Link>

            {/* Social Brands
            <div>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <Image
                  src="/instagram.svg"
                  width={20}
                  height={20}
                  alt="instagram"
                  className=""
                />
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <Image
                  src="/facebook.svg"
                  width={20}
                  height={20}
                  alt="facebook"
                  className=""
                />
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <Image
                  src="/xx.svg"
                  width={20}
                  height={20}
                  alt="x"
                  className="bg-white"
                />
              </a>
            </div> */}
            {/* End Social Brands */}
          </div>
          {/* End Col 1*/}
          <div className="col-span-1">
            <div className="mt-3 grid space-y-3">
              <Link href="#" className="font-semibold text-gray-100">
                Home
              </Link>
              <Link href="#" className="font-semibold text-gray-100">
                Services
              </Link>
              <Link href="#" className="font-semibold text-gray-100">
                Fleet
              </Link>
            </div>
          </div>

          {/* End Col 2*/}

          <div className="col-span-1">
            <div className="mt-3 grid space-y-3">
              <Link href="#" className="font-semibold text-gray-100">
                Get a quote
              </Link>
              <Link href="#" className="font-semibold text-gray-100">
                About us
              </Link>
              <Link href="#" className="font-semibold text-gray-100">
                Contact us
              </Link>
            </div>
          </div>
          {/* End Col 3*/}

          <div className="col-span-1">
            <div className="mt-3 grid space-y-3">
              <Link href="#" className="font-semibold text-gray-100">
                Privacy Policy
              </Link>
              <Link href="#" className="font-semibold text-gray-100">
                Terms os Use
              </Link>
            </div>
          </div>
         
          {/* End Col 4*/}
        </div>
        {/* End Grid  */}
        <hr className="mt-8 border-gray-600 " />
        <div className="mt-5 sm:mt-8 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-center sm:items-center">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-400 dark:text-neutral-400">
              Copyright © 2024 Kenzi Car Service. All Rights Reserved.
            </p>
          </div>
          {/* End Col */}
        </div>
      </div>
    </footer>
  );
}
