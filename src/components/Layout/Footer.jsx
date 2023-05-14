import React from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black2 w-full py-20  text-white">
      <div className="container px-3 flex flex-col gap-5 ">
        <div className="flex flex-col lg:flex-row  items-center lg:items-start justify-center lg:justify-around gap-10">
          <div className="flex flex-col items-center gap-3 text-lg">
            <div className="text-2xl font-semibold">Contact Us</div>
            <div className="flex items-center gap-2 hover:text-yellow duration-300 cursor-pointer">
              <HiOutlineLocationMarker />
              <span>Location</span>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow duration-300 cursor-pointer">
              <BsFillTelephoneFill />
              <span>CAll 70+555 555 55 55</span>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow duration-300 cursor-pointer">
              <BsFillEnvelopeFill />
              <span>Example@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 text-lg lg:mr-10 ">
            <div className="text-2xl font-semibold">Who are we</div>
            <div className="max-w-[250px] text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              assumenda nobis, praesentium esse amet vel tempora libero, cum
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 text-lg">
            <div className="text-2xl font-semibold">Opening Hours</div>
            <div className="flex items-center gap-2 ">Everyday</div>
            <div className="flex items-center gap-2 ">10.00 Am -10.00 Pm</div>
          </div>
        </div>
        <div className="flex  items-center justify-center text-xl mt-10 text-center">
          © 2023 this site is coded by ofenos
        </div>
      </div>
    </div>
  );
};

export default Footer;
