import React, { useEffect, useState } from "react";

const MuiscDetail = ({ selectedData }) => {
  return (
    <div className="flex flex-row space-x-6">
      {selectedData && (
        <>
          <div className="h-40 w-40 bg-neutral-900 rounded-md overflow-hidden">
            <img src={selectedData.url} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">
              {selectedData.title}
            </h3>
            <h4 className="my-2">
              Singer/Band -{" "}
              <span className="text-indigo-500 font-bold">
                {selectedData.singer}
              </span>
            </h4>
            <div className="flex flex-row justify-start items-center">
              <i className="ri-timer-line mr-2"></i>
              <span>{selectedData.duration}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MuiscDetail;
