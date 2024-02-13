import { useSignInMutation } from 'features/auth';
import React from 'react';
import { Typography } from 'shared/ui/typography/Typography';

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
      <Typography variant={'count1'}>제목 1</Typography>
      <button onClick={handleSubmit}>로그인 버튼</button>
    </div>
  );
};
