import { useState } from 'react';

export function useAge(initialValue: string) {
  const [age, setAge] = useState(initialValue);

  const handleAgeSelect = (selected: string) => {
    setAge(selected);
  };

  return { age, handleAgeSelect };
}
