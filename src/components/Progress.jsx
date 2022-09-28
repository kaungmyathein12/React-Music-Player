import React, { useEffect, useRef, useState } from "react";

const Progress = ({ player, duration, currentTime, getTime, setPlay }) => {
  const parentBarRef = useRef(null);
  const progressBarRef = useRef(null);
  useEffect(() => {
    player?.addEventListener("timeupdate", (e) => {
      const { duration, currentTime } = player;
      const progressBarWidth = (currentTime / duration) * 100;
      progressBarRef.current.style.width = `${progressBarWidth}%`;
    });
    parentBarRef.current?.addEventListener("click", (e) => {
      if (player !== undefined && player !== null) {
        setPlay(true);
        player.currentTime = 0;
        const width = e.target?.clientWidth;
        const clickX = e.offsetX;
        const duration = player?.duration;
        if (duration !== undefined) {
          player.currentTime = (clickX / width) * duration;
          console.log((clickX / width) * duration);
        }
      }
    });
  }, [player]);

  return (
    <div className="mt-8 flex flex-row justify-start items-center space-x-4">
      <div className="flex flex-row justify-start items-center grow space-x-4">
        <span>{currentTime ? getTime(currentTime) : "00:00"}</span>

        <div className="h-1 relative grow bg-neutral-600 ">
          <div
            className="inset-0 cursor-pointer absolute z-20"
            ref={parentBarRef}></div>
          <div
            className="w-0 bg-indigo-600 absolute top-0 bottom-0"
            ref={progressBarRef}></div>
        </div>
        <span>{getTime(duration)}</span>
      </div>
      {/* <div>
        <i className="ri-volume-down-fill text-indigo-500 text-2xl"></i>
      </div> */}
    </div>
  );
};

export default Progress;
