import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Playlist from "./Playlist";

const Playlists = ({
  selected = {},
  videos = [],
  setPlaylist = () => {},
  onSelectVideo = () => {},
}) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedVideos = Array.from(videos);
    const [movedVideo] = reorderedVideos.splice(result.source.index, 1);
    reorderedVideos.splice(result.destination.index, 0, movedVideo);
    setPlaylist(reorderedVideos);
  };
  const grid = 8;
  const getItemStyle = (draggableStyle, index) => {
    return {
      userSelect: "none",
      padding: grid,
      backgroundColor: selected.id === index ? "#313131" : "#000",
      ...draggableStyle,
    };
  };

  const getListStyle = () => ({
    height: "100%",
    borderRadius: 20,
    overflow: "auto",
    border: "1.5px solid #313131",
  });
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            className="playlists-container"
          >
            <div
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
                padding: "10px",
                position: "sticky",
                top: 0,
                backgroundColor: "#000",
                zIndex: 1,
              }}
            >
              {`PlayLists (${selected.id}/${videos.length})`}
            </div>
            {videos.map((video, index) => (
              <Draggable
                key={video.id}
                draggableId={video.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      provided.draggableProps.style,
                      video.id
                    )}
                    onClick={() => {
                      onSelectVideo(video);
                    }}
                  >
                    <Playlist data={video} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Playlists;
