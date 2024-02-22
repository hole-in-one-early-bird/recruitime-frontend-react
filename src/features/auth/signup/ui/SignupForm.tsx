import { useSignUpMutation } from 'features/auth';
import { useValidation } from 'features/auth/@hooks/useValidation';
import { useDebounce } from 'features/hooks/useDebounce';
import React, { useEffect } from 'react';
import { useForm } from 'shared/hooks/useForm';
import { Button } from 'shared/ui/button/Button';
import { TextInput } from 'shared/ui/input/TextInput';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const SignupForm = () => {
  const initialValues = {
    email: '',
    password: '',
    passwordConfirm: '',
  };
  const { mutate: signUp } = useSignUpMutation();
  const { mutate: validation } = useValidation();
  const { values, handleChange, errors } = useForm(initialValues);
  const debouncedEmail = useDebounce(values.email, 300); // 이메일 입력에 대해 500ms 디바운싱 적용

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isFormValid) {
      signUp(values);
    }
  };

  useEffect(() => {
    if (debouncedEmail.trim() !== '') {
      const result = validation(debouncedEmail);
      console.log(result);
    }
  }, [debouncedEmail, validation]);

  const isFormValid =
    Object.values(values).every((value) => (value as string).trim() !== '') &&
    Object.values(errors).every((error) => !error);

  return (
    <SignupFormWrapper>
      <Typography className='title' variant={'largeTitle'}>
        회원가입
      </Typography>

      <TextInput
        className='space'
        label='이메일'
        type='text'
        name='email'
        value={values.email}
        onChange={handleChange}
        placeholder={'이메일을 입력해주세요'}
        error={errors.email}
        isValid={!errors.email && values.email !== ''}
      />

      <TextInput
        className='space'
        label='비밀번호'
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
        placeholder={'영문, 숫자가 포함된 1~10자'}
        error={errors.password}
        isValid={!errors.password && values.password !== ''}
      />

      <TextInput
        className='space'
        label='비밀번호 확인'
        type='password'
        name='passwordConfirm'
        value={values.passwordConfirm}
        onChange={handleChange}
        placeholder={'영문, 숫자가 포함된 1~10자'}
        error={errors.passwordConfirm}
        isValid={
          !errors.passwordConfirm &&
          values.passwordConfirm !== '' &&
          values.password === values.passwordConfirm
        }
      />

      <Button
        onClick={handleSubmit}
        variant={isFormValid ? 'primary' : 'primaryDisabled'}
        disabled={!isFormValid}
        style={{ position: 'fixed', bottom: '65px' }}
      >
        회원가입
      </Button>
    </SignupFormWrapper>
  );
};

const SignupFormWrapper = styled.div`
  .space {
    margin-bottom: 46px;
  }
  .title {
    margin-bottom: 66px;
  }
`;
