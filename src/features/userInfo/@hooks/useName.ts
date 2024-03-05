import { useState } from 'react';

// 커스텀 훅 useName
const useName = (initialValue: string) => {
  const [name, setName] = useState(initialValue);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length > 5) {
      alert('5자 이하로 작성해주세요');
    } else {
      setName(input);
    }
  };

  return [name, handleNameChange] as const;
};

export default useName;
