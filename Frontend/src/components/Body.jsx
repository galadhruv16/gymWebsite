import React from "react";
import hppg02 from "../assets/hppg02.jpg";
import hppg03 from "../assets/hppg03.jpg";
import Header from "./Header.jsx";

import DivFirst from "./HomePage.jsx";
import DivSecond from "./HomePlans.jsx";
import DivThird from "./HomeBMIPage.jsx";
import DivFourth from "./HomeBlogs.jsx";
import DivFifth from "./HomeContactUs.jsx";

const Body = () => {
  return (
    <div className="h-screen">
      <DivFirst />
      <img
        className=" w-full object-cover sm:block hidden relative"
        src={hppg02}
        alt="pagebg"
      />
      <img
        className=" h-1/2 object-cover object-center block sm:hidden sm:object-contain relative "
        src={hppg03}
        alt="pagebg"
      />
      <DivSecond />
      <DivThird />
      <DivFourth />
      <DivFifth />
    </div>
  );
};

export default Body;
