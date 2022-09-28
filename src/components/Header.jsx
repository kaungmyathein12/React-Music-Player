import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-start">
      <h4 className="text-2xl font-bold bg-indigo-500 text-white inline-block px-2 py-1 rounded-md">
        React Music
      </h4>
      <i className="ri-sun-fill text-2xl text-yellow-500"></i>
    </div>
  );
};

export default Header;
