import React from 'react';
import SkillBar from './SkillBar';
import { resumeContent } from '../../../Data/Data';

const Skills = () => {

  return (
    <div className="bg-[var(--color-dark-slate)] p-8">
      {resumeContent.skillsData.map((skillData, index) => (
        <SkillBar key={index} skill={skillData.skill} percentage={skillData.percentage} />
      ))}
    </div>
  );
};

export default Skills;
