import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-start">
      <h4 className="text-2xl font-bold bg-indigo-600 text-white inline-block px-2 py-1 rounded-md">
        React Music
      </h4>
      <a
        href="https://github.com/kaungmyathein12/React-Music-Player"
        target="_blank">
        <i className="ri-github-fill text-3xl"></i>
      </a>
    </div>
  );
};

export default Header;
