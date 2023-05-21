import MainContent from "@/components/Basket/MainContent";
import SideBar from "@/components/Basket/SideBar";
import React from "react";

const Basket = () => {
  return (
    <div className="w-full h-screen  flex   ">
      <MainContent />
      <SideBar />
    </div>
  );
};

export default Basket;
