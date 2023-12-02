import React from "react";
import { ProgressBar } from "../Progress/progressBar";

export const SkillItem = (props) => {
  const { label, width, bgColor } = props;
  return (
    <div className="col-md-12 position-relative">
      <label className="ms-2 mb-2 fw-medium ">{label}</label>
      <ProgressBar width={width} bgColor={bgColor} />
      <div
        className="percentage py-1 px-2 rounded text-white position-relative"
        style={{
          backgroundColor: bgColor,
          left: `calc(${width} - 4%)`,
        }}
      >
        {width}
        <div
          className="arrow position-absolute "
          style={{
            backgroundColor: bgColor,
          }}
        ></div>
      </div>
    </div>
  );
};
