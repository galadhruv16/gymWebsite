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
      <div className="absolute top-32 sm:-bottom-16 left-0 sm:left-0 z-50 sm:px-9">
        <div className="sm:mb-10">
          <div className="text-4xl sm:text-5xl text-white ">
            <p>IT DOESN'T GET EASIER</p>
            <p>YOU GET BETTER</p>
          </div>
          <div>
            <button className="text-white mt-8 border border-white py-2 px-3 rounded-md">
              VIEW PLANS
            </button>
          </div>
        </div>
        <div className="flex sm:py-10 py-48 sm:mt-24 sm:flex-row flex-col gap-4 items-center">
          {/* {plans.map((plan) => (
            <PlanCards />
          ))} */}
          <PlanCards />
          <PlanCards />
          <PlanCards />
        </div>
      </div>
    </div>
  );
};

export default DivFirst;
