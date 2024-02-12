import { useSignInMutation } from 'features/auth';
import React from 'react';
const mockData = {
  email: 'asdf@naver.com',
  password: 'juhee123',
};
export const SigninPage = () => {
  const { mutate: signIn } = useSignInMutation();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signIn(mockData);
  };
  return (
    <div>
      <button onClick={handleSubmit}>로그인 버튼</button>
    </div>
  );
};
