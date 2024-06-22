import React from "react";
import GetInTouch from "../assets/GetInTouch.jpg";
const DivFifth = () => {
  return (
    <div>
      <div className="grid grid-flow-col w-full">
        <div className="w-[55vw] ">
          <div className="mx-[20%] my-12 ">
            <p className="text-5xl text-violet-950 font-bold">GET IN TOUCH</p>
            <p className="m-1 text-gray-500 font-semibold" >Got Questions? Just contact me below </p>
            <div className="grid grid-flow-col ">
                <div className="grid ">
                    
                    <label>First Name</label>
                    <input type="text" name="FirstName" className="border border-gray-500 rounded-md" />
                </div>
                <div>
                <div className="grid ">
                    
                    <label>First Name</label>
                    <input type="text" name="FirstName" className="border border-gray-500 rounded-md" />
                </div>
                </div>
            </div>
          </div>
        </div>
        <div>
          <img className="w-[45vw]" src={GetInTouch} alt="GetInTouch" />
        </div>
      </div>
    </div>
  );
};

export default DivFifth;
