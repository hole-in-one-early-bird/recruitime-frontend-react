import { useState } from 'react';

export function useMatch(initialValue: string) {
  const [match, setMatch] = useState(initialValue);

  const handleMatchSelect = (selected: string) => {
    setMatch(selected);
  };

  return { match, handleMatchSelect };
}
