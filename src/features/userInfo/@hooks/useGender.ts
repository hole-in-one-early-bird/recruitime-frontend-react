import { useState } from 'react';

export function useGender(initialValue: string) {
  const [gender, setGender] = useState(initialValue);

  const handleGenderSelect = (selected: string) => {
    setGender(selected);
  };

  return { gender, handleGenderSelect };
}
