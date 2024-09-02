import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "./Menu";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();

  // Determine if the current route is the homepage
  const isHomePage = router.pathname === "/";

  return (
    <>
      <header
        className={`w-full z-50 flex flex-wrap sm:justify-start sm:flex-nowrap text-sm py- ${
          isHomePage
            ? "absolute backdrop-blur-sm bg-transparent text-white"
            : "absolute backdrop-blur-sm bg-transparent text-white"
        }`}
      >
        <nav className="max-w-[75rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <Link className="" href="/">
              <Image height={100} width={200} src="/logo.png" />
            </Link>
            <div className="block lg:hidden">
              <Menu />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className=" flex flex-col gap-10 p-8 sm:p-0 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <>
                <Link
                  className="font-medium font-poppins text-lg uppercase hover:text-primary"
                  href="/"
                >
                  home
                </Link>
                <Link
                  className="font-medium font-poppins text-lg uppercase hover:text-primary"
                  href="/services"
                >
                  services
                </Link>
                <Link
                  className="font-medium font-poppins text-lg uppercase hover:text-primary"
                  href="/fleet"
                >
                  Fleet
                </Link>
                <Link
                  className="font-medium font-poppins text-lg uppercase hover:text-primary"
                  href="/about-us"
                >
                  About us
                </Link>
                <Link
                  className="font-medium font-poppins text-lg uppercase hover:text-primary"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
                {/* <Link className="font-medium font-poppins text-lg uppercase hover:text-primary" href="/get-a-quote">
                  Get a Quote
                </Link> */}
                <Link
                  href={"/get-a-quote"}
                  className="rounded-lg bg-primary font-poppins text-lg text-white font-medium py-2 px-5 flex justify-center w-fit mx-auto "
                >
                  Get a Quote
                </Link>
              </>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
