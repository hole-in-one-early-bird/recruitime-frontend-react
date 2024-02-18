import { useSignUpMutation } from 'features/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { useForm } from 'shared/hooks/useForm';
import { Button } from 'shared/ui/button/Button';
import TextInput from 'shared/ui/input/TextInput';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';
const mockData = {
  email: 'asdf@naver.com',
  password: 'juhee123',
};
export const SignupForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const { mutate: signUp } = useSignUpMutation();
  const { values, handleChange, errors } = useForm(initialValues);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signUp(mockData);
  };
  return (
    <SignupFormWrapper>
      <Typography className='title' variant={'largeTitle'}>
        회원가입
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
      <TextInput
        label='비밀번호 확인'
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
        placeholder={'영문, 숫자가 포함된 1~10자'}
      />
      <Button onClick={handleSubmit} variant={'primary'} style={{ position: 'fixed', bottom: '65px' }}>
        회원가입
      </Button>
    </SignupFormWrapper>
  );
};

const SignupFormWrapper = styled.div`
  .title {
    margin-bottom: 66px;
  }
`;
