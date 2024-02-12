import { useSignInMutation } from 'features/auth';
import React from 'react';

const mockData = {
  userEmail: 'asdf@naver.com',
  password: 'juhee123',
};
export const SigninForm = () => {
  const { mutate: signIn } = useSignInMutation();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signIn(mockData);
  };
  return (
    <div>
      {/* <Typography variant='count1' children={'test'} /> */}
      <button onClick={handleSubmit}>로그인 버튼</button>
    </div>
  );
};
