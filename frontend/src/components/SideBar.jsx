import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { IoMdBook } from "react-icons/io";
import { FaChartLine } from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Home", icon: <AiOutlineHome size={20} />, path: "/" },
    {
      name: "Exercise",
      icon: <IoMdBook size={20} />,
      path: "/exercise",
    },
    { name: "Progress", icon: <FaChartLine size={20} />, path: "/progress" },
    {
      name: "Settings",
      icon: <AiOutlineSetting size={20} />,
      path: "/settings",
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-base-200 flex flex-col transition-all duration-300 ${
          collapsed ? "w-13" : "w-45"
        }`}
      >
        <div className="p-2 flex justify-start">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle Sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  collapsed ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        {/* Menu */}
        <ul className="menu flex-grow p-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.path)}
                className="flex items-center gap-3 p-2 rounded hover:bg-base-300 tooltip tooltip-right"
                data-tip={collapsed ? item.name : ""}
              >
                {item.icon}
                {!collapsed && <span>{item.name}</span>}
              </button>
            </li>
          ))}
        </ul>

        {/* Collapse / Expand Button */}
      </div>


    </div>
  );
}
