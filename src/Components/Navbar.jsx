import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Hero.io logo"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
          />
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            Hero.io
          </h2>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-700 font-medium">
          <li className="flex-1 text-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#632EE3] font-semibold border-b-2 border-[#632EE3]"
                  : "hover:text-[#945FEE] hover:border-b-2 hover:border-[#945FEE]"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex-1 text-center">
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "text-[#632EE3] font-semibold border-b-2 border-[#632EE3]"
                  : "hover:text-[#945FEE] hover:border-b-2 hover:border-[#945FEE]"
              }
            >
              Apps
            </NavLink>
          </li>
          <li className="flex-1 text-center">
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "text-[#632EE3] font-semibold border-b-2 border-[#632EE3]"
                  : "hover:text-[#945FEE] hover:border-b-2 hover:border-[#945FEE]"
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="text-white font-semibold px-5 py-2 rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex items-center gap-2">
          <i className="fa-brands fa-github"></i>
          Contribute
        </button>
      </div>
    </div>
  );
};

export default Navbar;
