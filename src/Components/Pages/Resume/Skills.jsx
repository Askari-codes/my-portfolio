import React from 'react';
import SkillBar from './SkillBar';
import { resumeContent } from '../../../Data/Data';

const Skills = () => {

  return (
    <div className="bg-[--color-accent] m-1 mb-24  p-8">
      {resumeContent.skillsData.map((skillData, index) => (
        <SkillBar key={index} skill={skillData.skill} percentage={skillData.percentage} />
      ))}
    </div>
  );
};

export default Skills;
