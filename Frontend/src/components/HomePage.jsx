import React from "react";
import Header from "./Header";
import PlanCards from "./PlanCards";
import { useGetPlans } from "../hooks/useGetPlans";
const DivFirst = () => {
  const { plans, loading } = useGetPlans();
  console.log(plans);

  return (
    <div>
      <Header />
      <div className="absolute top-32 mt-8 sm:mt-auto mx-4 sm:mx-auto  sm:-bottom-16 left-0 sm:left-0 z-50 sm:px-9">
        <div className="sm:mb-10">
          <div className="text-3xl sm:text-5xl text-white ">
            <p>IT DOESN'T GET EASIER</p>
            <p>YOU GET BETTER</p>
          </div>
          <div>
            <button className="text-white mt-8 border border-white py-2 mb-6 px-3 rounded-md">
              VIEW PLANS
            </button>
          </div>
          
        </div>
        <div className="sm:flex sm:flex-row hidden flex-col gap-6 my-16 items-center">
          
          <PlanCards />
          <PlanCards />
          <PlanCards />
        </div>
      </div>
    </div>
  );
};

export default DivFirst;
