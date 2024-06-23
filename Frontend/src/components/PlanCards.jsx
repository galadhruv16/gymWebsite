import React from "react";
import upperchallenge from "../assets/upperchallenge.webp";
import movchallenge from "../assets/movchallenge.webp";
import abschallenge from "../assets/abschallenge.webp";

const PlanCards = () => {
  return (
    <div className="w-52">
      <img src={upperchallenge} alt="upperchallenge" />
      <div className="bg-violet-950 opacity-60 pb-16">
        <p className="text-lg px-4 pt-4 text-white font-bold">
          Upper Body Challenge
        </p>
        <p className="px-4 text-white">Free</p>
      </div>
      <button className="  bg-violet-950 text-white border opacity-100 border-white py-2 px-16 mx-5 -my-14 absolute rounded-md">
        JOIN
      </button>
    </div>
  );
};

export default PlanCards;
