import React, { useEffect, useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";
import Btns from "./components/Btns";
import Header from "./components/Header";
import MuiscDetail from "./components/MuiscDetail";
import MusicList from "./components/MusicList";
import Progress from "./components/Progress";
import { data } from "./music";
const App = () => {
  const [play, setPlay] = useState(false);
  const [selectedData, setSelectedData] = useState(undefined);
  const [musicList, setMusicList] = useState();
  const playerRef = useRef(null);
  const player = playerRef.current;
  const playMusic = () => {
    setPlay(() => true);
    if (player !== undefined) {
      player.play();
    }
  };
  const pauseMusic = () => {
    setPlay(() => false);
    if (player !== undefined) {
      player.pause();
    }
  };
  const renderData = (id) => {
    if (musicList !== undefined) {
      if (id >= 0) {
        setSelectedData(musicList[id]);
      } else {
        setSelectedData(musicList[1]);
      }
    }
  };
  useEffect(() => {
    setMusicList(data);
    renderData();
  }, [musicList]);
  return (
    <div className="font-sen grid place-items-center w-full h-screen bg-[#191919] text-white">
      {musicList && musicList.length > 0 && (
        <div className="w-[500px] mx-auto shadow shadow-neutral-900 bg-[#222] rounded-md p-6 overflow-hidden">
          <audio
            src={selectedData && selectedData.song}
            className="hidden"
            autoPlay
            ref={playerRef}></audio>
          <Header />
          <MusicList
            selectedData={selectedData}
            musicList={musicList}
            selectMusic={renderData}
          />
          <MuiscDetail selectedData={selectedData} />
          <Progress />
          <Btns
            selectedData={selectedData}
            renderData={renderData}
            musicListLength={musicList.length}
            play={play}
            setPlay={setPlay}
            playMusic={playMusic}
            pauseMusic={pauseMusic}
            player={player}
          />
        </div>
      )}
    </div>
  );
};

export default App;
