import React from "react";
import Blog1 from "../assets/Blog1.jpg";
import { Link } from "react-router-dom";
const BlogPageTiles = () => {
  return (
    <div><Link to="/blogs/:resid">
      <div className=" sm:my-44 ">
        <img src={Blog1} alt="" className="absolute sm:w-96 w-auto sm:p-0 p-4 rounded-lg"/>
        <div class=" z-10 text-white p-2 relative  top-60 sm:w-80 ">
          <p className="mx-4 my-2 pt-auto text-lg font-bold">BLOG TITLE</p>
          <p className=" mx-4 ">
            This is a Description for the blog. This is a description for the
            blog. This is a description for the Blog
          </p>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default BlogPageTiles;
