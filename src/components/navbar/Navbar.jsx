import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className=" navbar bg-base-100 shadow-sm mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="hover:bg-[#9514FA] hover:text-white">Products</a>
            </li>
            <li>
              <a className="hover:bg-[#9514FA] hover:text-white">Features</a>
            </li>
            <li>
              <a className="hover:bg-[#9514FA] hover:text-white">Pricing</a>
            </li>
            <li>
              <a className="hover:bg-[#9514FA] hover:text-white">
                Testimonials
              </a>
            </li>
            <li>
              <a className="hover:bg-[#9514FA] hover:text-white">FAQ</a>
            </li>
          </ul>
        </div>
        <a className="btn border-none shadow-none text-3xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent hover:bg-transparent">
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="hover:bg-[#9514FA] hover:text-white">Products</a>
          </li>
          <li>
            <a className="hover:bg-[#9514FA] hover:text-white">Features</a>
          </li>
          <li>
            <a className="hover:bg-[#9514FA] hover:text-white">Pricing</a>
          </li>
          <li>
            <a className="hover:bg-[#9514FA] hover:text-white">Testimonials</a>
          </li>
          <li>
            <a className="hover:bg-[#9514FA] hover:text-white">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex justify-between items-center gap-2">
          <a className="btn bg-transparent border-none shadow-none hover:bg-[#9514FA] hover:text-white">
            {" "}
            <IoCartOutline /> Login
          </a>
          <a className="btn border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white transition-transform  hover:scale-105 active:scale-95">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
