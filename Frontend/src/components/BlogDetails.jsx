import React from "react";
import Blog1 from "../assets/Blog1.jpg";
import Header from "./Header";

const BlogDetails = () => {
  return (
    <div>
      <Header />
      <div className="w-full sm:flex gap-16 sm:mt-4 mt-20 p-8 sm:p-20">
        <img src={Blog1} alt="" className="sm:w-[40vw] " />
        <div className="sm:pr-28 my-12">
          <p className="sm:text-5xl text-5xl font-extrabold text-violet-950">
            BLOG TITLE
          </p>
          <p className="text-lg my-2 text-gray-600">
            June 17 | Celebrity | 1 Comments
          </p>
          <p className="my-4 text-lg text-gray-600  ">
            This is a description for the blog. This is a description for the
            blog. This is a description for the blog
          </p>
          <p className="mt-6 mb-4 text-2xl font-bold text-violet-950  ">
            1 COMMENTS
          </p>
          <p className=" text-gray-600 ml-10">
            <span className="text-violet-950 font-bold">Dev</span> ON JUNE
            18,2024 <br />
            This is test component
          </p>
          <p className="mt-12 text-2xl font-bold text-violet-950">
            SUBMIT A COMMENT
          </p>
          <input
            type="text"
            placeholder="Add a Comment"
            className="border border-gray-400 py-1 sm:w-2/3 w-full my-2 text-center rounded-lg"
          />
          <div>
            <button className="text-white bg-violet-950  text-center my-4 rounded-md py-2 sm:py-1 w-3/5 sm:w-1/3">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
