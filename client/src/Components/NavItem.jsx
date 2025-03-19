import React from "react";

//NavItem Code
const NavItem = ({ icon, text, isActive = false }) => {
  return (
    <button
      className={`flex gap-3 items-center px-3 py-2 text-gray-500 rounded-md cursor-pointer w-full text-left hover:bg-gray-50 transition-colors ${
        isActive ? "bg-gray-50" : ""
      }`}
    >
      <i className={`ti ti-${icon} text-xl`} />
      <span className="text-sm">{text}</span>
    </button>
  );
};

export default NavItem;