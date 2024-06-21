import React from "react";
import hppg02 from "../assets/hppg02.jpg";
import Header from "./Header.jsx";

import DivFirst from "./DivFirst.jsx";
import DivSecond from "./DivSecond.jsx";

const Body = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <DivFirst />
      <DivSecond  />
      <img src={hppg02} alt="pagebg" />
    </div>
  );
};

export default Body;
