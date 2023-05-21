import { Button } from "antd";
import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="flex flex-col gap-5 items-center">
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
          <Image fill src={"/assets/404.png"} alt="" />
        </div>
        <Button
          type="button"
          className="flex gap-2 items-center group duration-300 bg-[#fd715c] text-white w-fit"
        >
          Back To Home <BsArrowRightShort />
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
