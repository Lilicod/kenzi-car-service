import Banner from "@/components/Banner";
import Layout from "@/layout/Layout";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "@/utile/lib";
import { FaUsers } from "react-icons/fa6";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import Link from "next/link";
import LocationsSection from "@/components/home-page/LocationsSection";

export default function Fleet() {
  const settings = {
    customPaging: function (i) {
      return (
        <a className="block w-16 h-16 lg:w-24 lg:h-24 overflow-hidden bg-secondary rounded-xl border-2 border-transparent hover:border-primary transition duration-300 ">
          <img
            src={`/suv${i + 1}.png`}
            className="w-full h-full object-cover"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          customPaging: function (i) {
            return (
              <a className="block w-16 h-16 bg-secondary overflow-hidden rounded-lg  border-2 border-transparent hover:border-primary transition duration-300">
                <img
                  src={`/suv${i + 1}.png`}
                  className="w-full h-full object-cover "
                  alt={`Thumbnail ${i + 1}`}
                />
              </a>
            );
          },
        },
      },
    ],
  };

  return (
    <Layout>
      <Banner image={"suv2.jpg"} header="Fleet" text=""></Banner>
      <div className="block lg:flex lg:gap-8 max-w-[75rem] mx-auto pb-16">
        <div className="max-w-2xl mx-auto py-4 lg:py-8 px-4 ">
          <Slider {...settings}>
            {images.map((image) => (
              <div
                key={image.id}
                className="flex justify-center bg-secondary rounded-xl "
              >
                <img
                  src={image.src}
                  className="w-full h-auto lg:h-96 object-cover rounded-xl "
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="max-w-2xl mx-auto py-8 px-4 mt-0 lg:mt-0">
          <h4 className="text-2xl font-medium font-poppins">SUV 6 PAX</h4>
          <p className="text-lg font-normal font-poppins max-w-3xl">
            Travel in comfort and style with our premium SUV service. Perfect
            for groups, families, or business travelers, our spacious SUVs offer
            a smooth and luxurious ride with plenty of room for luggage.
          </p>
          <div className="flex gap-4 flex-wrap mt-4">
            <div className="font-poppins text-lg p-2 flex items-center gap-3">
              <FaUsers className="text-primary text-3xl" /> 7 Passengers
            </div>
            <div className="font-poppins text-lg p-2 flex items-center gap-3">
              <BsFillSuitcase2Fill className="text-primary text-3xl" /> 6
              Suitcases
            </div>
            <div className="font-poppins text-lg p-2 flex items-center gap-3">
              <FaWifi className="text-primary text-3xl" /> On Board Wi-Fi
            </div>
          </div>
          <Link
            href={"/get-a-quote"}
            className="rounded-lg bg-primary font-poppins text-white font-medium py-3 px-6 flex justify-center w-fit mx-auto lg:mx-0 mt-4"
          >
            Reserve Now
          </Link>
        </div>
      </div>
    </Layout>
  );
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-['→']`}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-['←']`}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};
