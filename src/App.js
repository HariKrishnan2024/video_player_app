import { useState } from "react";
import "./App.css";
import Playlists from "./Components/Playlists";
import VideoPlayer from "./Components/VideoPlayer";

function App() {
  const initialPlaylist = [
    {
      id: 1,
      time: "0:10",
      thumbnail:
        "https://lh3.googleusercontent.com/p/AF1QipNbv0qC85UgyDmyJFZ9a9QIoT4E3D1cYykwSdGB=s1360-w1360-h1020",
      title: "Ultraviolette : High-Performance Electric Vehicles",
      name: "Ultraviolette",
      url: "https://d2atk76x06g5eh.cloudfront.net/homepage/videos/battery.mp4",
    },
    {
      id: 2,
      time: "0:38",
      thumbnail:
        "https://www.orxaenergies.com/_next/image?url=%2Fassets%2Fimgs%2Ffloatmenu%2Freserve-mantis.png&w=1200&q=75",
      title: "Orxa Energies : Experience the Ambush Predator in action",
      name: "Orxa Energies",
      url: "https://public-files-orxa.s3.ap-south-1.amazonaws.com/videos/home.mp4",
    },
    {
      id: 3,
      time: "0:08",
      thumbnail:
        "https://i.ytimg.com/vi/OEVx6QsfnVQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB1Qwj2FfIIUsyNEQ5Vvw2gUDUa1g",
      title: "Ather - Electric Scooters With Largest Fast Charging Network",
      name: "Ather Energy",
      url: "https://www.atherenergy.com/images/gen4/450x/videos/performance/Performance.webm",
    },
    {
      id: 4,
      time: "0:05",
      title: "Aadi : A matter of character",
      name: "Aadi",
      url: "https://www.audi.com.au/content/dam/nemo/australia/offers/12-Days-of-christmas-2023/Stage-large/Q8%20e-tron%20Video%201920x1080%20desktop%20.mp4#t=0.001",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiv6l7Jyb1dst8qCo1KIIw-VAORBNcsnw3g&usqp=CAU",
    },
    {
      id: 5,
      time: "0:08",
      thumbnail:
        "https://i.ytimg.com/vi/OEVx6QsfnVQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB1Qwj2FfIIUsyNEQ5Vvw2gUDUa1g",
      title: "Ather - Electric Scooters With Largest Fast Charging Network",
      name: "Ather Energy",
      url: "https://www.atherenergy.com/images/gen4/450x/videos/performance/Performance.webm",
    },
    {
      id: 6,
      time: "0:05",
      title: "Audi : A matter of character",
      name: "Audi",
      url: "https://www.audi.com.au/content/dam/nemo/australia/offers/12-Days-of-christmas-2023/Stage-large/Q8%20e-tron%20Video%201920x1080%20desktop%20.mp4#t=0.001",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiv6l7Jyb1dst8qCo1KIIw-VAORBNcsnw3g&usqp=CAU",
    },
  ];

  const [playlists, setPlaylists] = useState(initialPlaylist);
  const [selectedVideo, setSelectedVideo] = useState(initialPlaylist[0]);

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
  };

  const handleSearch = (e) => {
    let value = e.target.value;
    let result = initialPlaylist.filter((playlist) => {
      return playlist.title.toLowerCase().includes(value.toLowerCase());
    });
    setPlaylists(result);
  };
  return (
    <div
      style={{
        backgroundColor: "#0F0F0F",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 50,
      }}
      className="container"
    >
      <div
        style={{
          paddingTop: "5vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          style={{
            width: "70%",
            backgroundColor: "transparent",
            border: "1px solid grey",
            padding: 10,
            color: "#fff",
            borderRadius: 5,
          }}
          onChange={handleSearch}
          placeholder="Search by title"
          className="search-input"
        />
      </div>
      <div
        style={{
          width: "90vw",
          padding: "0vh 0px 10vh 0px",
          display: "flex",
          justifyContent: "space-between",
          alignSelf: "center",
        }}
        className="app-layout"
      >
        <VideoPlayer
          video={selectedVideo}
          onVideoEnded={() => {
            if (playlists.length === selectedVideo.id) {
              setSelectedVideo(playlists[0]);
            } else {
              setSelectedVideo(playlists[selectedVideo.id]);
            }
          }}
        />
        <Playlists
          selected={selectedVideo}
          videos={playlists}
          setPlaylist={(lists) => {
            setPlaylists(lists);
          }}
          onSelectVideo={handleSelectVideo}
        />
      </div>
    </div>
  );
}

export default App;
