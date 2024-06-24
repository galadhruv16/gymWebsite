import React from "react";
import hppg01 from "../assets/hppg01.jpg";
import { useState } from "react";
import useBMI from "../hooks/useBMI";
const DivThird = () => {
  const [formValues, setFormValues] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "",
  });
  const [bmiPresent, setBmiPresent] = useState(false);

  const { age, height, weight, gender } = formValues;
  const bmi = useBMI(age, height, weight);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleGenderSelect = (selectedGender) => {
    setFormValues({
      ...formValues,
      gender: selectedGender,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBmiPresent(true);
  };
  return (
    <div className="sm:grid  sm:grid-flow-col sm:my-40 ">
      <div className="">
        <h1 className="text-xl mt-8 text-center sm:hidden text-violet-950 font-bold ">
          DISCOVER YOUR HEALTH STATUS
        </h1>
        <p className="text-gray-500 mb-4 sm:hidden text-center block font-semibold">
          Calculate your BMI
        </p>
        <img
          className="sm:w-[50vw] w-[90vw] mx-auto sm:m-0  "
          src={hppg01}
          alt="BMIimg"
        />
      </div>
      <div className="">
        <div>
          <h1 className="text-2xl sm:block hidden text-violet-950 font-bold ">
            DISCOVER YOUR HEALTH STATUS
          </h1>
          <p className="text-gray-500 hidden sm:block font-semibold">
            Calculate your BMI
          </p>
        </div>
        <div className="">
          <form className="grid ml-8 sm:m-0">
            <div className="mt-10">
              <label className="text-gray-500 mr-8 ">Gender</label>

              <button
                type="button"
                className={`sm:p-1 p-2 sm:mr-0 mr-6 sm:w-1/5  border-gray-400 border rounded-md text-gray-500 hover:bg-blue-500 hover:text-white transition-colors duration-200 ${
                  gender === "male" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => handleGenderSelect("male")}
              >
                <span className="mr-2">♂️</span>
                Male
              </button>
              <button
                type="button"
                className={` sm:p-1 p-2 sm:mx-8 w-auto sm:w-1/5 border-gray-400 border rounded-md text-gray-500 hover:bg-pink-500 hover:text-white transition-colors duration-200 ${
                  gender === "female" ? "bg-pink-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => handleGenderSelect("female")}
              >
                <span className="mr-2">♀️</span>
                Female
              </button>
            </div>
            <div>
              <label className="text-gray-500 mr-8">Weight</label>
              <input
                type="text"
                placeholder="Weight (kgs)"
                name="weight"
                value={formValues.weight}
                onChange={handleInputChange}
                className="border border-gray-400 rounded-md p-1 pl-4 w-2/3 mt-4 "
              />
            </div>
            <div>
              <label className="text-gray-500 mr-8">Height</label>
              <input
                type="number"
                name="height"
                placeholder="Height (cms)"
                value={formValues.height}
                onChange={handleInputChange}
                className="border border-gray-400 rounded-md p-1 pl-4 w-2/3 mt-4 "
              />
            </div>
            <div>
              <label className="text-gray-500 mr-[51px]">Age</label>
              <input
                type="text"
                placeholder="Age"
                name="age"
                value={formValues.age}
                onChange={handleInputChange}
                className="border border-gray-400 rounded-md p-1 pl-4 w-2/3 mt-4 "
              />
            </div>
            <div>
              <button
                type="sumbit"
                onClick={handleSubmit}
                className="bg-violet-900 py-2 w-3/5 m-5 ml-20 sm:ml-0 text-white sm:mt-16 sm:py-2 sm:w-2/6 rounded-md"
              >
                Calculate
              </button>
            </div>
          </form>
          {bmiPresent && (
            <div>
              <h3 className="text-gray-500 ml-28 sm:ml-0 font-semibold sm:m-4 text-lg">
                Your BMI: {bmi}
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DivThird;
