import Meta from "@/components/Meta/Meta";
import React, { useEffect } from "react";

import Banner from "@/components/Home/Banner";
import Ad from "@/components/Home/Ad";
import Menu from "@/components/Home/Menu";
import dbConnect from "@/lib/dbConnect";

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

export const getServerSideProps = async (ctx) => {
  await dbConnect();
  return {
    props: {
      data: null,
    },
  };
};
