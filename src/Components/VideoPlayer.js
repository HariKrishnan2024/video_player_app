import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import ReactPlayer from "react-player";

const VideoPlayer = ({ video = {}, onVideoEnded = () => {} }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

  const handleKeyPress = (e) => {
    switch (e.key) {
      case "ArrowRight":
        handleSeekForward(e);
        break;
      case "ArrowLeft":
        handleSeekBackward(e);
        break;
    }
  };

  const handleSeekForward = (e) => {
    let currentTime = videoRef.current.player.getCurrentTime();
    let duration = videoRef.current.player.getDuration();
    const seekTime = Math.min(currentTime + 5, duration);
    videoRef.current.seekTo(seekTime);
  };

  const handleSeekBackward = () => {
    const currentTime = videoRef.current.getCurrentTime();
    const seekTime = Math.max(0, currentTime - 5);
    videoRef.current.seekTo(seekTime);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handlePlayPauseToggle = () => {
    setPlaying(!playing);
    setShowIcon(true);
    setTimeout(() => {
      setShowIcon(false);
    }, 3000);
  };

  useEffect(() => {
    if (playing) {
      const timeoutId = setTimeout(() => {
        setShowIcon(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [playing]);
  return (
    <div
      style={{
        height: "100%",
        background: "#000",
        borderRadius: 20,
        border: "1.5px solid #313131",
        position: "relative",
      }}
      className="video-container"
    >
      <ReactPlayer
        ref={videoRef}
        url={video.url}
        style={{
          objectFit: "cover",
          zIndex: 1,
        }}
        width={"100%"}
        height={"95%"}
        playing={playing}
        controls
        playbackRate={1}
        onPause={handlePlayPauseToggle}
        onPlay={handlePlayPauseToggle}
        autoplay
        onEnded={onVideoEnded}
      />
      {showIcon ? (
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "45%",
            backgroundColor: "#000",
            padding: "20px 22px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          className="videoIcon"
        >
          {playing ? (
            <FaPause style={{ fontSize: 25, color: "#fff" }} />
          ) : (
            <FaPlay
              style={{
                fontSize: 25,
                color: "#fff",
              }}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default VideoPlayer;
