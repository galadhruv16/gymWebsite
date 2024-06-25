import PlansPageCards from "./PlansPageCards";
import React from "react";
import Header from "./Header";
import PlansPageImg from "../assets/PlansPageImg.jpg";
const Plans = () => {
  return (
    <div>
      <div className="  sm:flex ">
        <Header />
        <img
          className="block sm:hidden object-cover object-center"
          src={PlansPageImg}
          alt="PlansPageImg"
        />
        <div className="sm:w-[50%] w-screen ">
          <img
            className="sm:block hidden"
            src={PlansPageImg}
            alt="PlansPageImg"
          />
        </div>
        <div className="sm:ml-20 ml-8 sm:my-48 sm:w-[35%]">
          <div>
            <p className="sm:text-8xl text-6xl font-bold">
              TAKE. <br />
              CONTROL. <br />
              NOW. <br />
            </p>
            <p className="my-6 mx-1 text-gray-500 font-semibold text-2xl">
              Help Us. Help You.
            </p>
          </div>
          <div>
            <p className="text-9xl text-violet-950 text-right ">↓</p>
          <button className="sm:hidden w-2/5 text-white bg-violet-950  py-2 rounded-md ">Our Plans</button>
          </div>
        </div>
      </div>
      <div className="sm:grid my-10 sm:my-0 sm:grid-cols-2">
        <PlansPageCards />
        <PlansPageCards />
        <PlansPageCards />
        <PlansPageCards />
      </div>
    </div>
  );
};

export default Plans;
