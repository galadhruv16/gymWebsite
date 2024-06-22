import React from "react";
import hppg01 from "../assets/hppg01.jpg";
const DivThird = () => {
  return (
    <div className="sm:grid sm:grid-flow-col sm:my-40 ">
      <div>
        <img className="sm:w-[50vw] " src={hppg01} alt="BMIimg" />
      </div>
      <div className="">
        <div>
          <h1 className="text-2xl text-violet-950 font-bold ">
            DISCOVER YOUR HEALTH STATUS
          </h1>
          <p className="text-gray-500 font-semibold">Calculate your BMI</p>
        </div>
        <div className="">
          <form className="grid ">
            <div className="mt-10">
              <label className="text-gray-500 mr-8 ">Gender</label>

              <button
                type="button"
                className="p-1 w-1/5  border-gray-400 border rounded-md text-gray-500 hover:bg-blue-500 hover:text-white transition-colors duration-200"
              >
                <span  className="mr-2">
                  ♂️
                </span>
                Male
              </button>
              <button
                type="button"
                className=" p-1 mx-8 w-1/5 border-gray-400 border rounded-md text-gray-500 hover:bg-pink-500 hover:text-white transition-colors duration-200"
              >
                <span className="mr-2">
                  ♀️
                </span>
                Female
              </button>
            </div>
            <div>
              <label className="text-gray-500 mr-8">Weight</label>
              <input
                type="text"
                placeholder="Weight (kgs)"
                className="border border-gray-400 rounded-md p-1 pl-4 w-2/3 mt-4 "
              />
            </div>
            <div>
              <label className="text-gray-500 mr-8">Height</label>
              <input
                type="text"
                placeholder="Height (cms)"
                className="border border-gray-400 rounded-md p-1 pl-4 w-2/3 mt-4 "
              />
            </div>
            <div>
              <label className="text-gray-500 mr-[51px]">Age</label>
              <input
                type="text"
                placeholder="Age"
                className="border border-gray-400 rounded-md p-1 pl-4 w-2/3 mt-4 "
              />
            </div>
            <div>
              <button className="bg-violet-900 text-white mt-16 py-2 w-2/6 rounded-md">
                Calculate
              </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DivThird;
