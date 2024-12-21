import React from "react";

 const VideoPlayer = ({ videoUrl, onVideoEnd }) => {
  return (
    <iframe
      className="w-full h-64 rounded-t-lg"
      src={videoUrl}
      allow="autoplay; encrypted-media"
      allowFullScreen
      onEnded={onVideoEnd}
      title="YouTube Video"
    ></iframe>
  );
};
export default VideoPlayer
