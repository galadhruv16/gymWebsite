import React from "react";
import Header from "./Header";
import Plan1 from "../assets/Plan1.jpg";
import checkMark from "../assets/checkMark.svg";
import PlanDetailsDummy from "../assets/PlanDetailsDummy.jpg";
const PlanDetails = () => {
  return (
    <div>
      <Header />
      <div className="sm:flex my-20 sm:my-32 m-8 sm:m-0   ">
        <div>
          <img src={PlanDetailsDummy} alt="" className="rounded-lg sm:w-[50vw] " />
        </div>
        <div className="sm:my-16 my-6 sm:ml-12">
          <p className="font-extrabold text-4xl  sm:text-6xl  text-violet-950 ">
            Fitness & Nutrition
          </p>
          <p className="sm:text-xl mt-2 mb-6 sm:mt-6 sm:mb-16 sm:w-2/3 ">
            Unlock your dream body with right diets & workouts
          </p>
          <div className="text-violet-950 mb-6 font-semibold">
            <p className="flex sm:my-4">
              <img className="sm:w-5 w-4 sm:mx-2" src={checkMark} alt="" />
              Personalised Diet and Workout plans
            </p>
            <p className="flex sm:my-4">
              <img className="sm:w-5 w-4 sm:mx-2" src={checkMark} alt="" />
              Weekly Monitoring
            </p>
            <p className="flex sm:my-4">
              <img className="sm:w-5 w-4 sm:mx-2" src={checkMark} alt="" />
              Continuous Support
            </p>
          </div>
          <div className="sm:mx-3 flex sm:my-5">
            <p className="font-bold text-xl sm:text-4xl">₹</p>
            <p className="font-semibold text-6xl sm:text-8xl">4499</p>

          </div>
          <button className="border my-5 sm:mx-3 sm:my-10 border-violet-950 sm:text-lg rounded-lg sm:py-4 py-3 text-lg px-16 sm:px-24 text-violet-950 font-bold">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
