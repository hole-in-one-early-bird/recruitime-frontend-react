import React from 'react';
const mockData = {
  email: 'asdf@naver.com',
  password: 'juhee123',
};
export const SignupPage = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <div>
      <button onClick={handleSubmit}>회원가입 버튼</button>
    </div>
  );
};
