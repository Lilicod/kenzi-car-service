import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export const Menu = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setMenuOpened(false);
      }
    };

    if (menuOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpened]);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <>
      <button
        ref={toggleButtonRef}
        onClick={toggleMenu}
        className="z-50 absolute top-2 right-4 p-3 bg- border border-primary w-11 h-11 rounded-md"
      >
        <div
          className={`bg-primary h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-primary h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-primary h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        ref={menuRef}
        className={`z-40 absolute top-0 right-0 bottom- bg-secondary text-black transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-80 h-[100vh]" : "w-0 h-[100vh]"}`}
      >
        <div className="flex-1 flex items-center justify-start bg-secondary mt-16 text-lg font-poppins font-semibold flex-col gap-6 p-8">
          <>
            <Link className="font-semibold uppercase" href="/">
              home
            </Link>
            <Link className="font-semibold uppercase" href="/services">
              services
            </Link>
            <Link className="font-semibold uppercase" href="/fleet">
              Fleet
            </Link>
            <Link className="font-semibold uppercase" href="/about-us">
              About us
            </Link>
            <Link className="font-semibold uppercase" href="/contact-us">
              Contact Us
            </Link>
            {/* <Link className="font-semibold uppercase" href="/get-a-quote">
              Get a Quote
            </Link> */}
            <Link
              href={"/get-a-quote"}
              className="rounded-lg bg-primary font-poppins text-white font-medium py-3 px-6 flex justify-center w-fit mx-auto "
            >
              Get a Quote
            </Link>
          </>
        </div>
      </div>
    </>
  );
};
