import React from "react";
import Blog1 from "../assets/Blog1.jpg";
import Blog2 from "../assets/Blog2.jpg";
import Blog3 from "../assets/Blog3.jpg";
import HomeBlogTiles from "./HomeBlogTiles";
import { Link } from "react-router-dom";
const DivFourth = () => {
  return (
    <div>
      <div className="text-center sm:mt-0 mt-8 text-violet-950 text-2xl sm:text-3xl font-bold ">
        <p>NOT ALL STORIES START WITH</p>
        <p>ONCE UPON A TIME </p>
      </div>
      <div className="grid sm:grid-flow-col sm:gap-0 gap-8 mt-14  justify-center relative">
        <HomeBlogTiles />
        <HomeBlogTiles />
        <HomeBlogTiles />
      </div>
      <div className="grid my-10">
        
        <button className="mx-auto left-0 right-0 text-center bg-violet-950 text-white  py-3 border  px-16 rounded-md">
          <Link to="/blogs">READ ALL</Link>
          
        </button>
      </div>
    </div>
  );
};

export default DivFourth;
