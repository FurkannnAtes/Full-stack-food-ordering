import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className='bg-[url("/assets/bannerHome.jpg")] bg-repeat h-screen  max-h-[800px] w-full relative overflow-x-hidden'>
      <div className="absolute top-0 left-0 w-full h-full  bg-yellow/80 z-10"></div>
      <div className="container flex  md:flex-row items-center justify-between relative z-30 h-full w-full px-3">
        <div className="relative z-40">
          <div className="text-brown font-[900] font-bebas w-fit md:text-xl border-dashed p-2 rounded-md">
            IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS
          </div>
          <div className="banner-shadow xs:text-[6rem] text-[8rem]  md:text-[10rem] font-bebas text-brown font-[900] md:-mt-5 md:-mb-10 -mb-5">
            BURGER
          </div>
          <div className="banner-shadow  xs:text-[5rem]  text-[7rem] md:text-9xl  font-bebas text-brown font-[900]">
            WEEK
          </div>
        </div>

        <div className="w-2/3 hidden md:flex items-center justify-center h-[500px] relative -mb-20">
          <div className="relative -rotate-[30deg] w-[400px] mb-24 h-[400px] z-20">
            <Image
              className="object-contain"
              fill
              src="/assets/patato.png"
              alt=""
            ></Image>
          </div>
          <div className="relative -mb-[40px] -mx-[200px] w-[400px] h-[400px] z-30">
            <Image
              className="object-contain"
              fill
              src="/assets/hamburger.png"
              alt=""
            ></Image>
            <div className="absolute -left-10 bottom-10 bg-red text-white rounded-full w-[150px] h-[150px] flex items-center justify-center p-2 z-40">
              <div className="w-full h-full border-dashed rounded-full flex flex-col items-center justify-center font-semibold">
                <div>
                  <span className="text-4xl ">$5</span>
                  <span className="text-2xl ">.49</span>
                </div>
                <div className="text-3xl ">ONLY</div>
              </div>
            </div>
          </div>

          <div className="relative w-[400px] h-[400px] z-20 mb-28">
            <Image
              className="object-contain"
              fill
              src="/assets/cola1.png"
              alt=""
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
