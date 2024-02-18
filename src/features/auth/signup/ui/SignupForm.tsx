import { useSignUpMutation } from 'features/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { useForm } from 'shared/hooks/useForm';
import { Button } from 'shared/ui/button/Button';
import TextInput from 'shared/ui/input/TextInput';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const SignupForm = () => {
  const initialValues = {
    email: '',
    password: '',
    passwordConfirm: '',
  };
  const { mutate: signUp } = useSignUpMutation();
  const { values, handleChange, errors } = useForm(initialValues);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (Object.values(errors).every((x) => x === '')) {
      signUp(values);
    }
  };
  return (
    <SignupFormWrapper>
      <Typography className='title' variant={'largeTitle'}>
        회원가입
      </Typography>
      <TextInputContainer>
        <TextInput
          label='이메일'
          type='text'
          name='email'
          value={values.email}
          onChange={handleChange}
          placeholder={'이메일을 입력해주세요'}
          error={errors.email}
        />
      </TextInputContainer>
      <TextInputContainer>
        <TextInput
          label='비밀번호'
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
          placeholder={'영문, 숫자가 포함된 1~10자'}
          error={errors.password}
        />
      </TextInputContainer>
      <TextInputContainer>
        <TextInput
          label='비밀번호 확인'
          type='password'
          name='passwordConfirm'
          value={values.passwordConfirm}
          onChange={handleChange}
          placeholder={'영문, 숫자가 포함된 1~10자'}
          error={errors.passwordConfirm}
        />
      </TextInputContainer>

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

const TextInputContainer = styled.div`
  margin-bottom: 46px;
`;

const ErrorMsg = styled.div`
  margin-top: 6px;
`;
