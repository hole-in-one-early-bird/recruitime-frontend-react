import { useSignInMutation } from 'features/auth';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { useForm } from 'shared/hooks/useForm';
import colors from 'shared/styles/color';
import { common } from 'shared/styles/common';
import { Button } from 'shared/ui/button/Button';
import { TextInput } from 'shared/ui/input/TextInput';
import ToastPopup from 'shared/ui/toast/ToastPopup';
import { Typography } from 'shared/ui/typography/Typography';
import styled, { keyframes } from 'styled-components';

export const SigninForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const { values, handleChange, errors } = useForm(initialValues, ['email', 'password']);
  const location = useLocation();
  const [showToast, setShowToast] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const { signIn, loginResult } = useSignInMutation();

  useEffect(() => {
    if (location.state?.signupSuccess) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('.', { state: {} });
      }, 2000); // 2초 후에 토스트 팝업 숨기기
    }
  }, [location, navigate]);

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
        className='space'
        label='이메일'
        type='text'
        name='email'
        value={values.email}
        onChange={(e) => handleChange(e, isLoginPage)}
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
      <Error>
        <Typography variant={'error'}>
          {loginResult ? '' : `이메일과 비밀번호를 다시 한번 확인해주세요`}
        </Typography>
      </Error>
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
      <ToastPopupBox> {showToast && <ToastPopup>회원가입이 완료되었습니다!</ToastPopup>}</ToastPopupBox>
    </SigninFormWrapper>
  );
};

const SigninFormWrapper = styled.div`
  .space {
    margin-bottom: 46px;
  }
  .title {
    margin-bottom: 66px;
  }
`;

const AuthOptions = styled.div`
  ${common.flexCenterRow}
  gap: 28px;
  margin-bottom: 20px;
`;

const StyledTypography = styled(Typography)`
  padding: 2px;
  border-bottom: 1px solid ${colors.gray[400]};
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const Error = styled.div`
  text-align: center;
  margin: 45px 0 11px;
`;

const ToastPopupBox = styled.div`
  animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 1.5s;
  animation-fill-mode: forwards;
`;
