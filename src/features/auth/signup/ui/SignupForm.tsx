import { useSignUpMutation } from 'features/auth';
import React from 'react';
const mockData = {
  email: 'asdf@naver.com',
  password: 'juhee123',
};
export const SignupForm = () => {
  const { mutate: signUp } = useSignUpMutation();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signUp(mockData);
  };
  return (
    <div>
      <button onClick={handleSubmit}>회원가입 버튼</button>
    </div>
  );
};
