import { useState } from 'react';

interface Experience {
  option: string;
  detail: string;
}

export const useExperienceList = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  const addExperience = (option: string, detail: string) => {
    setExperiences([...experiences, { option, detail }]);
  };

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return { experiences, addExperience, removeExperience };
};
