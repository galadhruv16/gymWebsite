import React from "react";
import Blog1 from "../assets/Blog1.jpg";
import Blog2 from "../assets/Blog2.jpg";
import Blog3 from "../assets/Blog3.jpg";
import HomeBlogTiles from "./HomeBlogTiles";
const DivFourth = () => {
  return (
    <div>
      <div className="text-center text-violet-950 text-3xl font-semibold ">
        <p>NOT ALL STORIES START WITH</p>
        <p>ONCE UPON A TIME </p>
      </div>
      <div className="grid grid-flow-col mt-14  justify-center relative">
        <HomeBlogTiles />
        <HomeBlogTiles />
        <HomeBlogTiles />
        
      </div>
      <div className="grid my-10">
        <button className="mx-auto left-0 right-0 text-center bg-violet-950 text-white  py-3 border  px-16 rounded-md">
          READ ALL
        </button>
      </div>
    </div>
  );
};

export default DivFourth;
