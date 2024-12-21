import React, { useState, useRef } from "react";
import VideoPlayer from "./VideoPlayer";
import Assessment from "./Assessment";

const Task = ({ taskdata, index }) => {
  const [compttask, setCompttask] = useState(false);
  const load = useRef(null);

  const handleEndyoutube = () => {
  };

  const handleassigmnetTask = () => {
    setCompttask(true);
  };

  return (
    <div className="mb-10 w-full max-w-2xl bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <VideoPlayer videoUrl={taskdata.videoUrl} onVideoEnd={handleEndyoutube} />
      <div ref={load}>
        <Assessment
          assessment={taskdata.assessment}
          onComplete={handleassigmnetTask}
        />
      </div>
      {compttask && (
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() =>
            document
              .getElementById(`task-${index + 1}`)
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Next Task
        </button>
      )}
    </div>
  );
};

export default Task