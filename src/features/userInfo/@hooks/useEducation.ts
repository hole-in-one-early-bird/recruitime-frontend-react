// hooks/useEducation.ts
import { useState } from 'react';

export function useEducation(initialValue: string) {
  const [education, setEducation] = useState(initialValue);

  const handleEducationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEducation(event.target.value);
  };

  return { education, handleEducationChange };
}
