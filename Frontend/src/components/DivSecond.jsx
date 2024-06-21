import React from "react";

import FitBGrem from "../assets/FitBGrem.jpg";
import DiabetesBGrem from "../assets/DiabetesBGrem.jpg";
import OnlineBGrem from "../assets/OnlineBGrem.jpg";
const DivSecond = () => {
  return (
    <div>
      <div>
        <p className="ml-auto text-right mt-8 mr-16 font-bold text-violet-950 text-4xl">
          YOUR HEALTH IS JUST
        </p>
        <p className="ml-auto text-right mr-16 font-bold text-violet-950 text-4xl">
          A FEW STEPS AWAY
        </p>
      </div>
      <div className="sm:flex sm:my-16 justify-between mx-24 ">
        <div className="text-center shadow-md " >
          <img className="w-80   " src={FitBGrem} alt="FitnessNutrition" />
          <p className="text-center text-xl mt-4 mb-3 text-violet-950 font-extrabold">
            FITNESS & NUTRITION
          </p>
          <p className="text-center text-violet-950 ">
            Unlock your dream body with the
          </p>
          <p className="text-center text-violet-950 ">
            right diet and workouts
          </p>
          <button className="text-center text-lg py-1 border border-violet-950 px-20 my-6 rounded-lg">Details</button>
        </div>
        <div className="text-center shadow-md">
          <img className="w-80  " src={OnlineBGrem} alt="FitnessNutrition" />
          <p className="text-center text-xl mt-4 mb-3 text-violet-950 font-extrabold">
            ONLINE PERSONAL TRAINING
          </p>
          <p className="text-center text-violet-950 ">
            1-on-1 online sessions for Yoga,
          </p>
          <p className="text-center text-violet-950 ">Zumba & more ! </p>
          <button className="text-center text-lg py-1 border border-violet-950 px-20 my-6 rounded-lg">Details</button>
        </div>
        <div className="text-center shadow-md">
          <img className="w-80 " src={DiabetesBGrem} alt="FitnessNutrition" />
          <p className="text-center text-xl mt-4 mb-3 text-violet-950 font-extrabold">
            DIABETES MANAGEMENT
          </p>
          <p className="text-center text-violet-950 ">
            Manage diabetes & explore reversal{" "}
          </p>
          <p className="text-center text-violet-950 ">under qualified coach </p>
          <button className="text-center text-lg py-1 border border-violet-950 px-20 my-6 rounded-lg">Details</button>
        </div>
      </div>
    </div>
  );
};

export default DivSecond;
