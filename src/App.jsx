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
  const [error, setError] = useState(false);
  const [selectedData, setSelectedData] = useState(undefined);
  const [musicList, setMusicList] = useState();
  const [duration, setDuration] = useState("00:00");
  const [currentTime, setCurrentTime] = useState("00:00");
  const playerRef = useRef(null);
  const player = playerRef.current;
  const playMusic = () => {
    if (player) {
      player.play();
      setPlay(true);
    }
  };
  const pauseMusic = () => {
    setPlay(() => false);
    if (player) {
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

  const getTime = (time) => {
    let minutes = "0" + parseInt(time / 60);
    let second = "0" + parseInt(time % 60);
    let result = minutes + ":" + String(second.slice(-2));
    if (result === "0NaN:aN") {
      result = "00:00";
    }
    return result;
  };
  useEffect(() => {
    setMusicList(data);
    renderData();
  }, [musicList]);

  useEffect(() => {
    player?.addEventListener("loadeddata", (e) => {
      if (e.target.readyState > 0) {
        const dur = e.target.duration;
        setDuration(dur);
      }
    });
    player?.addEventListener("timeupdate", (e) => {
      const cur = e.target.currentTime;
      setCurrentTime(cur);
    });
  }, [player]);
  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.code === "Space") {
        playMusic();
      }
    });
  }, [player]);
  useEffect(() => {
    setTimeout(() => {
      if (error) {
        setError(false);
      }
    }, 3000);
  }, [error]);
  return (
    <div className="font-sen grid place-items-center w-full h-screen bg-[#191919] text-white">
      {musicList && musicList.length > 0 && (
        <div className="w-11/12 sm:w-[480px] mx-auto shadow shadow-neutral-900 bg-[#222] rounded-md p-6 overflow-hidden">
          <audio
            src={selectedData && selectedData.song}
            autoPlay
            className="hidden"
            ref={playerRef}></audio>
          <Header />
          {error && (
            <div className=" bg-rose-500  text-black font-semibold text-lg mt-7 -mb-2 text-center py-3 rounded-md">
              This features is not available at the moment.
            </div>
          )}
          <MusicList
            selectedData={selectedData}
            musicList={musicList}
            selectMusic={renderData}
            setPlay={setPlay}
            setError={setError}
          />
          <MuiscDetail
            selectedData={selectedData}
            duration={duration}
            getTime={getTime}
          />
          <Progress
            player={player}
            duration={duration}
            currentTime={currentTime}
            getTime={getTime}
            setPlay={setPlay}
          />
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
