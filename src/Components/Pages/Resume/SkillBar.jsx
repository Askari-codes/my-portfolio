import React from 'react';

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2 text-lg">
        <span>{skill}</span>
        <span className="font-medium">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-[--color-accent] rounded-full">
        <div
          className="h-2 bg-[--color-blue-200] rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
