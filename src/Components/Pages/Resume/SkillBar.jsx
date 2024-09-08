import React from 'react';

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2 text-white text-lg">
        <span>{skill}</span>
        <span className="font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-[var(--color-highlight)] h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
