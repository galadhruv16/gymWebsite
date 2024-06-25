import React from "react";
import PlanCards from "./PlanCards";
import FitBGrem from "../assets/FitBGrem.jpg";
import DiabetesBGrem from "../assets/DiabetesBGrem.jpg";
import OnlineBGrem from "../assets/OnlineBGrem.jpg";
import { Link } from "react-router-dom";
const DivSecond = () => {
  return (
    <div className="">
      <div className="sm:hidden flex flex-col items-center my-4">
        <PlanCards />
        <PlanCards />
        <PlanCards />
      </div>
      <div>
        <p className="sm:ml-auto hidden sm:block sm:text-right sm:mt-8 sm:mr-16 font-bold text-violet-950 sm:text-4xl">
          YOUR HEALTH IS JUST <br />A FEW STEPS AWAY
        </p>
        <p className="sm:ml-auto sm:hidden text-center mx-16 mb-4 text-xl font-bold block sm:text-right sm:mt-8 sm:mr-16 text-violet-950 sm:text-4xl">
          YOUR HEALTH IS JUST A FEW STEPS AWAY
        </p>
      </div>
      <div className="sm:flex sm:my-16 justify-between mx-8 sm:mx-24 ">
        <div className="text-center sm:my-0 sm:block flex flex-col my-4 shadow-md ">
          <img className="sm:w-80  " src={FitBGrem} alt="FitnessNutrition" />
          <p className="text-center text-xl sm:mt-4 sm:mb-3 text-violet-950 font-extrabold">
            FITNESS & NUTRITION
          </p>
          <p className="text-center text-sm sm:text-base text-violet-950 ">
            Unlock your dream body with the
          </p>
          <p className="text-center text-sm sm:text-base text-violet-950 ">
            right diet and workouts
          </p>
          <Link to="/plans">
            <button className="text-center text-sm sm:text-lg py-1 border border-violet-950 px-20 my-6 rounded-lg">
              Details
            </button>
          </Link>
        </div>
        <div className="text-center sm:my-0 sm:block flex flex-col my-4 shadow-md">
          <img className="sm:w-80  " src={OnlineBGrem} alt="FitnessNutrition" />
          <p className="text-center text-xl sm:mt-4 sm:mb-3 text-violet-950 font-extrabold">
            ONLINE PERSONAL TRAINING
          </p>
          <p className="text-center text-sm sm:text-base text-violet-950 ">
            1-on-1 online sessions for Yoga, <br />
            Zumba and More
          </p>
          <Link to="/plans">
            <button className="text-center text-sm sm:text-lg py-1 border border-violet-950 px-20 my-6 rounded-lg">
              Details
            </button>
          </Link>
        </div>
        <div className="text-center sm:block flex flex-col sm:my-0 my-4 shadow-md">
          <img className="sm:w-80 " src={DiabetesBGrem} alt="FitnessNutrition" />
          <p className="text-center text-xl sm:mt-4 sm:mb-3 text-violet-950 font-extrabold">
            DIABETES MANAGEMENT
          </p>
          <p className="text-center text-sm sm:text-base text-violet-950 ">
            Manage diabetes & explore reversal{" "}
          </p>
          <p className="text-center text-violet-950 ">under qualified coach </p>
          <Link to="/plans">
            <button className="text-center text-sm sm:text-lg py-1 border border-violet-950 px-20 my-6 rounded-lg">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DivSecond;
