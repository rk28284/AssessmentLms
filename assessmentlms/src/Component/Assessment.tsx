import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";

const Assessment = ({ assessment, onComplete }) => {
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState("");

  const { isthemeDark } = useTheme();

  const handleSubmit = () => {
    if (
      (assessment.type === "multipleChoice" &&
        response === assessment.answer) ||
      (assessment.type === "shortAnswer" &&
        response.trim().toLowerCase() === assessment.answer.toLowerCase())
    ) {
      setFeedback("Correct!");
      onComplete();
    } else {
      setFeedback("Incorrect, try again.");
    }
  };

  // Dynamic text and background styles based on theme
  const textColor = isthemeDark ? "text-white" : "text-gray-900";
  const bgColor = isthemeDark ? "bg-gray-700" : "bg-gray-50";
  const buttonBg = isthemeDark ? "bg-gray-800 hover:bg-gray-900" : "bg-gray-200 hover:bg-gray-300";

  return (
    <div className={`p-4 ${bgColor}`}>
      <h3 className={`text-lg font-semibold ${textColor}`}>
        {assessment.question}
      </h3>
      {assessment.type === "multipleChoice" ? (
        <div className="mt-4">
          {assessment.options.map((option, index) => (
            <button
              key={index}
              className={`block w-full px-4 py-2 mt-2 rounded ${buttonBg} ${textColor}`}
              onClick={() => setResponse(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-4">
          <input
            type="text"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            className={`w-full px-4 py-2 border rounded ${bgColor} ${textColor}`}
          />
        </div>
      )}
      <button
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {feedback && (
        <p className={`mt-2 text-sm ${textColor}`}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default Assessment;
