import React from "react";
import Plan1 from "../assets/Plan1.jpg";
import checkMark from "../assets/checkMark.svg";
import { Link } from "react-router-dom";
const PlansPageCards = () => {
  return (
    <div className="flex bg-gray-300 sm:m-6 my-6 mx-1  rounded-lg">
      <div>
        <img src={Plan1} alt="" className="rounded-lg sm:w-72 " />
      </div>
      <div className="sm:my-3 m-2 sm:m-0 sm:mx-8">
        <p className="font-extrabold  sm:text-xl sm:my-3 text-violet-950 ">
          Fitness & Nutrition Coaching
        </p>
        <div className="text-violet-950 py-1 font-semibold">
          <p className="flex sm:text-base text-xs">
            <img className="sm:w-5 w-4  mr-1" src={checkMark} alt="" />
            Personalised Diet and Workout plans
          </p>
          <p className="flex sm:text-base text-xs">
            <img className="sm:w-5 w-4 mr-1" src={checkMark} alt="" />
            Weekly Monitoring
          </p>
          <p className="flex sm:text-base text-xs">
            <img
              className="sm:w-5 w-4 mr-1 "
              src={checkMark}
              alt=""
            />
            Continuous Support
          </p>
        </div>
        <div className="sm:mx-3 flex sm:my-5">
          <p className="font-bold text-sm sm:text-lg">₹</p>
          <p className="font-semibold text-3xl sm:text-5xl">4499</p>
        </div>
        <Link to="/plans/:resid">
          <button className="bg-violet-950 py-1 px-10 sm:px-16 text-white sm:p-3  my-3 sm:my-0 text-xs sm:text-base rounded-md">
            DETAILS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlansPageCards;
