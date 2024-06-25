import React from "react";
import GetInTouch from "../assets/GetInTouch.jpg";
const DivFifth = () => {
  return (
    <div>
      <div className="grid grid-flow-row items-center sm:grid-flow-col ">
        <div>
          <img className="w-[80%] mx-auto left-0 right-0 sm:hidden block" src={GetInTouch} alt="GetInTouch" />
        </div>
        <div className="sm:w-[55vw] mx-auto left-0 right-0 ">
          <div className="sm:mx-[20%] my-5  sm:my-12 ">
            <p className="sm:text-5xl text-4xl text-violet-950 font-bold">GET IN TOUCH</p>
            <p className="sm:m-1 text-gray-500 font-semibold">
              Got Questions? Just contact me below{" "}
            </p>
            <div className="grid grid-flow-col sm:gap-4 mt-4 sm:mt-8">
              <div className="grid ">
                <label className="text-gray-600">First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  className="border border-gray-300 py-1 rounded-md"
                />
              </div>
              <div>
                <div className="grid ml-2 sm:ml-0 sm:mx-8 ">
                  <label className="text-gray-600">Last Name</label>
                  <input
                    type="text"
                    name="LastName"
                    className="border border-gray-300 py-1 rounded-md "
                  />
                </div>
              </div>
            </div>
            <div className="my-4  grid">
              <label className="text-gray-600">Email</label>
              <input
                type="text"
                name="Email"
                className="border w-[92%] border-gray-300 rounded-md py-1"
              />
            </div>
            <div className="my-4 h-full grid">
              <label className="text-gray-600">Message</label>
              <textarea
                name="message"
                className="border h-32 p-3 w-[92%] border-gray-300 active:border-gray-300 outline-none rounded-md"
              />
            </div>
            <div>
              <button className="bg-violet-950 text-white my-4 py-2 px-[15%] rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div>
          <img className="w-[45vw] hidden sm:block" src={GetInTouch} alt="GetInTouch" />
        </div>
      </div>
    </div>
  );
};

export default DivFifth;
