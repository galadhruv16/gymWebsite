import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between text-white absolute z-10">
        <div className="bg-violet-950 p-3 mt-6 mx-10 rounded-md">
          <p>SHASHANK —— </p>
          <p>CERTIFIED FITNESS TRAINER </p>
        </div>
        <div>
          <nav className="bg-violet-950 mt-8 ml-[690px] rounded-md" >
            <ul className="flex">
              <li className="p-3">Plans</li>
              <li className="p-3">Blogs</li>
              <li className="p-3">Challenges</li>
              <li className="p-3">Login</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
