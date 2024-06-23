import React from "react";

const Header = () => {
  return (
    <div>
      <div className="grid grid-flow-col 	  sm:absolute text-white z-10">
        <div className="bg-violet-950 p-3 m-6  rounded-md">
          <p>SHASHANK —— </p>
          <p>CERTIFIED FITNESS TRAINER </p>
        </div>

        <div className="bg-violet-950 text-sm sm:ml-[54vw]  m-8 rounded-md ">
          <ul className="flex ">
            <li className="p-4 ">Plans</li>
            <li className="p-4">Blogs</li>
            <li className="p-4">Challenges</li>
            <li className="p-4">Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
