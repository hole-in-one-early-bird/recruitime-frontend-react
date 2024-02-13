import { useSignInMutation } from 'features/auth';
import React from 'react';
import { useForm } from 'shared/hooks/useForm';
import TextInput from 'shared/ui/input/TextInput';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

const mockData = {
  userEmail: 'asdf@naver.com',
  password: 'juhee123',
};
export const SigninForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const { mutate: signIn } = useSignInMutation();

  const [values, handleChange] = useForm(initialValues);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(values.password);
    signIn(mockData);
  };

  return (
    <SigninFormWrapper>
      <Typography className='title' variant={'largeTitle'}>
        로그인
      </Typography>
      <TextInput
        label='이메일'
        type='text'
        name='username'
        value={values.username}
        onChange={handleChange}
        placeholder={'이메일을 입력해주세요'}
      />
      <TextInput
        label='비밀번호'
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
        placeholder={'영문, 숫자가 포함된 1~10자'}
      />
      <button onClick={handleSubmit}>로그인 버튼</button>
    </SigninFormWrapper>
  );
};

const SigninFormWrapper = styled.div`
  .title {
    margin-bottom: 66px;
  }
`;
