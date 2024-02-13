import { useSignInMutation } from 'features/auth';
import React from 'react';
import TextInput from 'shared/ui/input/TextInput';

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
      {/* <TextInput value={'이메일'} placeholder={'이메일을 입력해주세요'} />
      <TextInput value={'비밀번호'} placeholder={'영문, 숫자가 포함된 1~10자'} /> */}
      <button onClick={handleSubmit}>로그인 버튼</button>
    </div>
  );
};
