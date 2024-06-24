import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center py-6 px-2 sm:px-10 sm:pr-16 absolute top-0 left-0 text-white z-10">
        <div className="bg-violet-950/90 sm:text-base text-sm p-5 sm:p-3 rounded ">
          <p>
            SHASHANK —— <br />
            CERTIFIED FITNESS TRAINER
          </p>
        </div>

        <div className="bg-violet-950/90 sm:block hidden text-sm rounded-md ">
          <ul className="flex ">
            <Link to="/plans">
              <li className="p-5 ">Plans</li>
            </Link>
            <Link to="/blogs">
              <li className="p-5">Blogs</li>
            </Link>
            <li className="p-5">Challenges</li>
            <li className="p-5">Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
