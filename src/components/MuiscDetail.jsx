import React from "react";

const MuiscDetail = ({ selectedData, duration, getTime }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-y-0 sm:space-x-6">
      {selectedData && (
        <>
          <div className="h-40 w-full sm:w-40 bg-neutral-900 rounded-md overflow-hidden">
            <img
              src={selectedData.url}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-60">
            <h3 className="text-2xl font-bold inline-block px-2 py-1 bg-indigo-600 rounded-md text-white">
              {selectedData.title}
            </h3>
            <h4 className="mt-3 mb-2">
              Singer/Band
              <span className="text-green-500 text-lg px-2 py-1 rounded font-semibold ">
                {selectedData.singer}
              </span>
            </h4>
            <div className="inline-block">
              <div className="flex flex-row justify-start items-start font-semibold ">
                <i className="ri-timer-line mr-2"></i>
                <span>{getTime(duration)}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MuiscDetail;
