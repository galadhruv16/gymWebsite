import PlansPageCards from "./PlansPageCards";
import React from "react";
import Header from "./Header";
import PlansPageImg from "../assets/PlansPageImg.jpg";
const Plans = () => {
  return (
    <div>
      <div className="  flex ">
        <Header />
        <div className="w-[50%]">
          <img className='' src={PlansPageImg} alt="PlansPageImg" />
        </div>
        <div className="ml-20 my-48 w-[35%]">
          <div>
            <p className="text-8xl font-bold">
              TAKE. <br />
              CONTROL. <br />
              NOW. <br />
            </p>
            <p className="my-6 mx-1 text-gray-500 font-semibold text-2xl">Help Us. Help You.</p>
          </div>
          <div>
            <p className="text-9xl text-violet-950 text-right">↓</p>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2">
        <PlansPageCards />
        <PlansPageCards />
        <PlansPageCards />
        <PlansPageCards />
      </div>
    </div>
  );
};

export default Plans;
