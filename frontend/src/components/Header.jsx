import React, { useState } from "react";
import { BsRobot } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ authUser, logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar flex justify-between w-full px-4 sm:px-10 bg-base-100 border-b border-base-300 shadow-sm sticky top-0 z-50">
      {/* Left Section - Logo */}
      <div className="flex items-center gap-2">
        <BsRobot className="text-2xl text-primary" />
        <span className="font-semibold text-xl text-base-content">
          AI Language Tutor
        </span>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex items-center sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Right Section - User / Desktop Menu */}
      <div className="hidden sm:flex items-center gap-2">
        {authUser ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar placeholder btn btn-circle bg-primary text-primary-content"
            >
              <span className="text-lg font-medium">
                {authUser.fullName.slice(0, 1).toUpperCase()}
              </span>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border border-base-300 rounded-box w-52"
            >
              <li className="menu-title text-base-content/60">
                {authUser.fullName}
              </li>
              <li>
                <button
                  onClick={logout}
                  className="text-error hover:bg-error hover:text-error-content"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <span className="text-sm text-base-content/70 mr-2">
            Not Logged In
          </span>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 w-48 bg-base-100 border border-base-300 rounded-lg shadow-md sm:hidden z-40">
          {authUser ? (
            <ul className="p-2">
              <li className="font-medium text-base-content/70 mb-2">
                {authUser.fullName}
              </li>
              <li>
                <button
                  onClick={logout}
                  className="w-full text-left text-error hover:bg-error hover:text-error-content rounded p-1"
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <span className="block p-2 text-base-content/70">Not Logged In</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
