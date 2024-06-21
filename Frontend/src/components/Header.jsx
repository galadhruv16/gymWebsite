import React from "react";

const Header = () => {
  return (
    <div>
      <div className="sm:flex justify-between text-white absolute z-10">
        <div className="bg-violet-950 p-3 mt-6 mx-10  rounded-md">
          <p>SHASHANK —— </p>
          <p>CERTIFIED FITNESS TRAINER </p>
        </div>
        <div>
          <nav className="bg-violet-950 text-sm sm:mt-8 sm:ml-[690px] rounded-md" >
            <ul className="flex">
              <li className="p-4">Plans</li>
              <li className="p-4">Blogs</li>
              <li className="p-4">Challenges</li>
              <li className="p-4">Login</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
