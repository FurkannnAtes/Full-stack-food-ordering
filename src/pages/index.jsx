import Meta from "@/components/Meta/Meta";
import React from "react";

import Banner from "@/components/Home/Banner";
import Ad from "@/components/Home/Ad";
import Menu from "@/components/Home/Menu";

const Home = () => {
  return (
    <div>
      <Meta title={"Home"} />
      <Banner />
      <Ad />
      <Menu />
    </div>
  );
};

export default Home;
