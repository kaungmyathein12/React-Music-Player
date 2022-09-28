import React, { useEffect } from "react";

const Btns = ({
  selectedData,
  renderData,
  musicListLength,
  play,
  player,
  setPlay,
  playMusic,
  pauseMusic,
}) => {
  useEffect(() => {
    player?.addEventListener("ended", () => {
      if (selectedData.id === musicListLength - 1) {
        renderData(0);
      } else {
        renderData(selectedData.id + 1);
      }
    });
  }, [selectedData]);
  return (
    <>
      {selectedData && (
        <div className="mt-2 flex flex-row justify-center items-center space-x-1 text-3xl font-semibold text-white">
          <i
            className="ri-skip-back-mini-fill"
            onClick={() => {
              setPlay(false);
              if (selectedData.id !== 0) {
                renderData(selectedData.id - 1);
              } else {
                renderData(musicListLength - 1);
              }
              playMusic();
            }}></i>
          {play ? (
            <i
              className="ri-pause-fill"
              onClick={() => {
                pauseMusic();
              }}></i>
          ) : (
            <i
              className="ri-play-mini-fill"
              onClick={() => {
                playMusic();
              }}></i>
          )}

          <i
            className="ri-skip-forward-mini-fill"
            onClick={() => {
              setPlay(false);
              if (selectedData.id !== musicListLength - 1) {
                renderData(selectedData.id + 1);
              } else {
                renderData(0);
              }
              playMusic();
            }}></i>
        </div>
      )}
    </>
  );
};

export default Btns;
