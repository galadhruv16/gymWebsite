import React from "react";
import upperchallenge from "../assets/upperchallenge.webp";
import movchallenge from "../assets/movchallenge.webp";
import abschallenge from "../assets/abschallenge.webp";
const DivFirst = () => {
  return (
    <div>
      <div className="absolute  mt-32 px-9">
        <div className="text-5xl text-white">
          <p>IT DOESN'T GET EASIER</p>
          <p>YOU GET BETTER</p>
        </div>
        <div>
          <button className="text-white mt-8 border border-white py-2 px-3 rounded-md">
            VIEW PLANS
          </button>
        </div>
        <div className="flex py-20 ">
          <div className="w-52 ">
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
          <div className="w-52 mx-4">
            <img src={movchallenge} alt="movchallenge" />
            <div className="bg-violet-950 opacity-60 pb-16">
              <p className="text-lg px-4 pt-4 text-white font-bold">
                Movement Challenge
              </p>
              <p className="px-4 text-white">Free</p>
            </div>
            <button className="  bg-violet-950 text-white border opacity-100 border-white py-2 px-16 mx-5 -my-14 absolute rounded-md">
              JOIN
            </button>
          </div>
          <div className="w-52 ">
            <img src={abschallenge} alt="abschallenge" />
            <div className="bg-violet-950 opacity-60 pb-16">
              <p className="text-lg px-4 pt-4 text-white font-bold">
                Core & Abs Challenge
              </p>
              <p className="px-4 text-white">Free</p>
            </div>
            <button className="  bg-violet-950 text-white border opacity-100 border-white py-2 px-16 mx-5 -my-14 absolute rounded-md">
              JOIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivFirst;
