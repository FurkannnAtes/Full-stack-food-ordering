import React from "react";
import FoodCard from "../Card/FoodCard";
import { Button } from "antd";

const Menu = () => {
  return (
    <div className="container px-3 py-10 flex flex-col items-center gap-10">
      <div className="text-black2 text-4xl md:text-6xl font-semibold">
        Our most sold foods
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>

      <Button
        shape="round"
        className="text-brown bg-yellow font-extrabold text-xl hover:bg-brown hover:text-yellow duration-300 py-6  px-4 items-center justify-center flex"
        type="button"
      >
        View More
      </Button>
    </div>
  );
};

export default Menu;
