import { useSignInMutation } from 'features/auth';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { useForm } from 'shared/hooks/useForm';
import colors from 'shared/styles/color';
import { common } from 'shared/styles/common';
import { Button } from 'shared/ui/button/Button';
import TextInput from 'shared/ui/input/TextInput';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const SigninForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const { mutate: signIn } = useSignInMutation();

  const { values, handleChange, errors } = useForm(initialValues);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signIn(values);
  };

  const isFormValid =
    Object.values(values).every((value) => (value as string).trim() !== '') &&
    Object.values(errors).every((error) => !error);

  return (
    <SigninFormWrapper>
      <Typography className='title' variant={'largeTitle'}>
        로그인
      </Typography>

      <TextInput
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
        label='비밀번호'
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
        placeholder={'영문, 숫자가 포함된 1~10자'}
        error={errors.password}
        isValid={!errors.password && values.password !== ''}
      />
      <Button
        onClick={handleSubmit}
        variant={isFormValid ? 'primary' : 'primaryDisabled'}
        disabled={!isFormValid}
        style={{ marginBottom: '22px' }}
      >
        로그인
      </Button>
      <AuthOptions>
        <Link to={ROUTES_PATH.signup}>
          <StyledTypography variant={'caption'}>회원가입</StyledTypography>
        </Link>
        <Link to={ROUTES_PATH.findAccount}>
          <StyledTypography variant={'caption'}>계정 찾기</StyledTypography>
        </Link>
      </AuthOptions>
    </SigninFormWrapper>
  );
};

const SigninFormWrapper = styled.div`
  .title {
    margin-bottom: 66px;
  }
`;

const AuthOptions = styled.div`
  ${common.flexCenterRow}
  gap: 28px;
`;

const StyledTypography = styled(Typography)`
  padding: 2px;
  border-bottom: 1px solid ${colors.gray[400]};
`;
