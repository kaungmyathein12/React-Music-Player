import React from "react";

const MusicList = ({ selectedData, musicList, selectMusic, setPlay }) => {
  return (
    <div className="overflow-hidden overflow-x-scroll mt-5 mb-5">
      {selectedData && (
        <div className="py-4 min-w-fit flex flex-row items-center overflow-hidden space-x-4 ">
          <div className="w-10 h-10 border-2 border-neutral-400 rounded-full grid place-items-center">
            <i className="ri-add-fill text-2xl text-neutral-300"></i>
          </div>
          {musicList &&
            musicList.length > 0 &&
            musicList.map((el) => (
              <div
                key={el.id}
                className={`w-12 h-12 rounded-md overflow-hidden relative`}
                onClick={() => {
                  selectMusic(el.id);
                  setPlay(true);
                }}>
                {el.id === selectedData.id && (
                  <div className=" absolute inset-0 bg-black bg-opacity-50 grid place-items-center">
                    <i className="ri-music-fill text-2xl"></i>
                  </div>
                )}
                <img
                  src={el.url}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MusicList;
