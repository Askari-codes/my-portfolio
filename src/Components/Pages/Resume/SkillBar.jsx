import React from 'react';

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2  text-lg">
        <span>{skill}</span>
        <span className="font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-[--color-accent] rounded-full h-2">
        <div
          className="bg-[--color-blue-200] h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
