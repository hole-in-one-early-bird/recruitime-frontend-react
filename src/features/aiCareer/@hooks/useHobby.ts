import { useState } from 'react';

export function useHobby(initialValue: string) {
  const [hobby, setHobby] = useState(initialValue);

  const handleHobbySelect = (selected: string) => {
    setHobby(selected);
  };

  return { hobby, handleHobbySelect };
}
