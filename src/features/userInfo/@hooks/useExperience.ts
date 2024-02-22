// hooks/useEducation.ts
import { useState } from 'react';

export function useExperience(initialValue: string) {
  const [experience, setExperience] = useState(initialValue);

  const handleExperienceChange = (value: string) => {
    setExperience(value);
  };

  return { experience, handleExperienceChange };
}
