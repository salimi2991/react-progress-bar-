import React from "react";
import { progressData } from "../Progress/progressData";
import { SkillItem } from "./skillItem";

export const Skills = () => {
  return (
    <div className="row">
      {progressData.map((progress, i) => (
        <SkillItem
          key={i}
          label={progress.label}
          width={progress.width}
          bgColor={progress.bgColor}
        />
      ))}
    </div>
  );
};
