import React from "react";

const Playlist = ({ data = {} }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        gap: 15,
      }}
    >
      <div style={{ width: 150, position: "relative" }}>
        <img
          src={data.thumbnail}
          width={"100%"}
          alt={data.title}
          height={70}
          style={{
            objectFit: "cover",
            borderRadius: 15,
          }}
        />
        <div
          style={{
            backgroundColor: "#000",
            fontSize: 14,
            fontWeight: 600,
            padding: "1px 2px",
            borderRadius: 5,
            backdropFilter: "blur(10px)",
            position: "absolute",
            color: "#fff",
            bottom: 8,
            right: 5,
          }}
        >
          {data.time}
        </div>
      </div>
      <div
        style={{
          width: "70%",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: "bold",
            lineHeight: "1.5em",
            overflow: "hidden",
          }}
          className="playlist-title"
        >
          {data.title}
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#fff9",
          }}
        >
          {data.name}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
