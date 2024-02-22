// hooks/useEducation.ts
import { useState } from 'react';

export function useExperience(initialValue: string) {
  const [experience, setExperience] = useState(initialValue);

  const handleExperienceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(event.target.value);
  };

  return { experience, handleExperienceChange };
}
