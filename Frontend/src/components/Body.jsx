import React from "react";
import hppg02 from "../assets/hppg02.jpg";
import Header from "./Header.jsx";

import DivFirst from "./DivFirst.jsx";
import DivSecond from "./DivSecond.jsx";
import DivThird from "./DivThird.jsx";
import DivFourth from "./DivFourth.jsx";
import DivFifth from "./DivFifth.jsx";

const Body = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <DivFirst />
      <img className="sm:object-fill" src={hppg02} alt="pagebg" />
      <DivSecond />
      <DivThird />
      <DivFourth />
      <DivFifth />
    </div>
  );
};

export default Body;
