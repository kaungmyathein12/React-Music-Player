import React from "react";

const Progress = () => {
  return (
    <div className="mt-8 flex flex-row justify-start items-center space-x-4">
      <div className="flex flex-row justify-start items-center grow space-x-4">
        <span>2:04</span>
        <div className="bg-neutral-700 grow h-1">
          <div className="h-full w-2/5 bg-indigo-500"></div>
        </div>
        <span>4:35</span>
      </div>
      <div>
        <i className="ri-volume-down-fill text-indigo-500 text-2xl"></i>
      </div>
    </div>
  );
};

export default Progress;
