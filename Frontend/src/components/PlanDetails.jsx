import React from "react";
import Header from "./Header";
import Plan1 from "../assets/Plan1.jpg";
import checkMark from "../assets/checkMark.svg";
import PlanDetailsDummy from "../assets/PlanDetailsDummy.jpg";
const PlanDetails = () => {
  return (
    <div>
      <Header />
      <div className="flex my-32    ">
        <div>
          <img src={PlanDetailsDummy} alt="" className="rounded-lg w-[50vw]" />
        </div>
        <div className="my-16 ml-12">
          <p className="font-extrabold text-6xl  text-violet-950 ">
            Fitness & Nutrition
          </p>
          <p className="text-xl mt-6 mb-16 w-2/3 ">
            Unlock your dream body with right diets & workouts
          </p>
          <div className="text-violet-950 font-semibold">
            <p className="flex my-4">
              <img className="w-5 mx-2" src={checkMark} alt="" />
              Personalised Diet and Workout plans
            </p>
            <p className="flex my-4">
              <img className="w-5 mx-2" src={checkMark} alt="" />
              Weekly Monitoring
            </p>
            <p className="flex my-4">
              <img className="w-5 mx-2" src={checkMark} alt="" />
              Continuous Support
            </p>
          </div>
          <div className="mx-3 flex my-5">
            <p className="font-bold text-4xl">₹</p>
            <p className="font-semibold text-8xl">4499</p>

          </div>
          <button className="border mx-3 my-10 border-violet-950 text-lg rounded-lg py-4 px-24 text-violet-950 font-bold">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
