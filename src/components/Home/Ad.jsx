import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Ad = () => {
  const router = useRouter();
  return (
    <div className="container flex flex-col justify-center items-center gap-5 px-3 py-10">
      <div className="flex gap-4 h-[350px] w-full max-w-[1000px] mx-auto">
        <div
          onClick={() => router.push("/menu")}
          className="relative h-full w-1/2 cursor-pointer group overflow-hidden rounded-lg"
        >
          <Image
            className="object-cover rounded-lg group-hover:scale-110 duration-300"
            fill
            src="/assets/ad1.webp"
            alt=""
          />
          <div className="w-full h-full absolute z-10 bg-[#000000]/50 left-0 top-0 rounded-lg"></div>
          <div className="absolute left-5 top-5 text-white font-semibold z-20">
            <span className="text-2xl"> TRY IT TODAY</span>
            <br />
            <span className="text-3xl"> MUST POPULAR BURGER</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/2 ">
          <div
            onClick={() => router.push("/menu")}
            className="w-full h-full relative cursor-pointer group overflow-hidden rounded-lg"
          >
            <Image
              className="object-cover rounded-lg group-hover:scale-110 duration-300"
              fill
              src="/assets/ad5.jpg"
              alt=""
            />
            <div className="w-full h-full absolute z-10 bg-[#000000]/50 left-0 top-0 rounded-lg"></div>
            <div className="absolute left-5 top-5 text-white font-semibold z-20">
              <span className="text-xl"> TRY IT TODAY</span>
              <br />
              <span className="text-2xl"> MORE FUN</span>
            </div>
          </div>
          <div
            onClick={() => router.push("/menu")}
            className="w-full h-full relative cursor-pointer group rounded-lg overflow-hidden"
          >
            <Image
              className="object-cover rounded-lg group-hover:scale-110 duration-300"
              fill
              src="/assets/ad3.jpg"
              alt=""
            />
            <div className="w-full h-full absolute z-10 bg-[#000000]/50 left-0 top-0 rounded-lg"></div>
            <div className="absolute left-5 top-5 text-white font-semibold z-20">
              <span className="text-2xl"> TRY IT TODAY</span>
              <br />
              <span className="text-3xl">
                {" "}
                FRESH & <br /> CHILI
              </span>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="text-brown bg-yellow font-extrabold text-xl rounded-none py-6  px-4 items-center justify-center flex"
        type="button"
      >
        ALWAYS TASTY BURGER
      </Button>
    </div>
  );
};

export default Ad;
