import React from "react";

export const ProgressBar = (props) => {
  const { width, bgColor } = props;
  const progressBarStyle = {
    width: width, // Set the width using the style prop
    backgroundColor: bgColor, // Set the background color using the style prop
  };
  return (
    <div className="progress">
      <div className="progress-bar" style={progressBarStyle}></div>
    </div>
  );
};
