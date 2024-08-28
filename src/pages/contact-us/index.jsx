import Banner from "@/components/Banner";
import Layout from "@/layout/Layout";
import React from "react";
import { useForm } from "react-hook-form"; 
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import LocationsSection from "@/components/home-page/LocationsSection";

export default function ContactUs() {
  // Initialize the form with useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors }, // Destructure errors from formState
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Form Submitted Data: ", data);
    // Perform form submission logic 
  };

  return (
    <Layout>
      <Banner image={"contact-us.jpeg"} header="Contact Us" />
      <div className="flex md:flex-row flex-col gap-5 md:gap-0 max-w-[75rem] mx-auto font-poppins py-4 md:py-16">
        <div className="w-full h-[500px] space-y-5 lg:space-y-10 p-5 lg:p-10">
          <h3 className="font-medium text-xl">
            Feel free to contact us any time. We will get{" "}
            <br className="hidden lg:block" /> back to you as soon as we can!
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col gap-8 w-full lg:w-[440px] bg-white"
          >
            {/* Name Field */}
            <div className="relative">
              <input
                className={`border-b p-2 focus:outline-none w-full ${
                  errors.name ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })} 
              />
              {errors.name && (
                <p className="absolute text-red-500 text-sm mt-2 pl-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                className={`border-b p-2 focus:outline-none w-full ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="absolute text-red-500 text-sm mt-2 pl-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number Field */}
            <div className="relative">
              <input
                className={`border-b p-2 focus:outline-none w-full ${
                  errors.phone ? "border-red-500" : ""
                }`}
                type="tel"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Phone number should only contain numbers",
                  },
                  minLength: {
                    value: 10,
                    message: "Phone number should be at least 10 digits",
                  },
                })}
              />
              {errors.phone && (
                <p className="absolute text-red-500 text-sm mt-2 pl-2">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                className={`border-b p-2 focus:outline-none w-full ${
                  errors.message ? "border-red-500" : ""
                }`}
                name=""
                id=""
                cols="30"
                rows="1"
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <p className="absolute text-red-500 text-sm mt-2 pl-2">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-lg"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="w-full bg-black h-[400px] md:h-[475px] p-5 lg:p-10 space-y-10 rounded-lg">
          <h3 className="font-medium text-4xl text-white">Info</h3>
          <div className="flex flex-row items-center gap-4 text-gray-300">
            <FaPhoneAlt className="text- primary text-3xl" /> 1-954-842-0809
          </div>
          <div className="flex flex-row items-center gap-4 text-gray-300">
            <IoMail className="text- primary text-3xl" />{" "}
            kenzi.carservice@gmail.com
          </div>
          <div className="flex flex-row items-center gap-4 text-gray-300">
            <FaLocationDot className="text- primary text-3xl" /> Fort
            Lauderdale, Florida
          </div>
          <div className="flex flex-row items-center gap-4 text-gray-300">
            <MdOutlineWatchLater className="text- primary text-3xl" /> 6:00 AM -
            9:00 PM
          </div>
        </div>
      </div>
      <LocationsSection />
    </Layout>
  );
}
