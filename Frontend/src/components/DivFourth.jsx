import React from "react";
import Blog1 from "../assets/Blog1.jpg";
import Blog2 from "../assets/Blog2.jpg";
import Blog3 from "../assets/Blog3.jpg";
const DivFourth = () => {
  return (
    <div>
      <div className="text-center text-violet-950 text-3xl font-semibold ">
        <p>NOT ALL STORIES START WITH</p>
        <p>ONCE UPON A TIME </p>
      </div>
      <div className="grid grid-flow-col mt-14  justify-center relative">
        <div className="w-80">
          <img src={Blog1} alt="Blogpic" className="rounded-xl" />
          <div class="absolute mb-2 w-80 bottom-0  text-white text- p-2">
            <p className="mx-4 my-2 pt-auto font-bold">BLOG TITLE</p>
            <p className="text-sm mx-4 ">
              This is a Description for the blog. This is a description for the
              blog. This is a description for the Blog
            </p>
          </div>
        </div>
        <div className="w-80 sm:mx-10">
          <img src={Blog2} alt="Blogpic" className="rounded-xl"/>
          <div class="absolute mb-2 w-80 bottom-0  text-white text- p-2">
            <p className="mx-4 my-2 pt-auto font-bold">BLOG TITLE</p>
            <p className="text-sm mx-4 ">
              This is a Description for the blog. This is a description for the
              blog. This is a description for the Blog
            </p>
          </div>
        </div>
        <div className="w-80">
          <img src={Blog3} alt="Blogpic" className="rounded-xl"/>
          <div class="absolute mb-2 w-80 bottom-0  text-white text- p-2">
            <p className="mx-4 my-2 pt-auto font-bold">BLOG TITLE</p>
            <p className="text-sm mx-4 ">
              This is a Description for the blog. This is a description for the
              blog. This is a description for the Blog
            </p>
          </div>
        </div>
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
