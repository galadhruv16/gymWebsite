import React from "react";
import Plan1 from "../assets/Plan1.jpg";
import checkMark from "../assets/checkMark.svg";
import { Link } from "react-router-dom";
const PlansPageCards = () => {
  return (
    <div className="flex bg-gray-300 m-6 rounded-lg">
      <div>
        <img src={Plan1} alt="" className="rounded-lg w-72" />
      </div>
      <div className="my-3 mx-8">
        <p className="font-bold text-xl my-3 text-violet-950 ">
          Fitness & Nutrition Coaching
        </p>
        <div className="text-violet-950 font-semibold">
          <p className="flex ">
            <img className="w-5 mx-2" src={checkMark} alt="" />
            Personalised Diet and Workout plans
          </p>
          <p className="flex">
            <img className="w-5 mx-2" src={checkMark} alt="" />
            Weekly Monitoring
          </p>
          <p className="flex">
            <img className="w-5 mx-2" src={checkMark} alt="" />
            Continuous Support
          </p>
        </div>
        <div className="mx-3 flex my-5">
          <p className="font-bold text-lg">₹</p>
          <p className="font-semibold text-5xl">4499</p>
        </div>
        <Link to="/plans/1">
          <button className="bg-violet-950 px-16 text-white p-3 rounded-md">
            DETAILS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlansPageCards;
