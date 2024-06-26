import axios from 'axios';
import { API } from 'config';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';

import { useForm } from 'shared/hooks/useForm';
import { Button } from 'shared/ui/button/Button';
import { TextInput } from 'shared/ui/input/TextInput';
import ToastPopup from 'shared/ui/toast/ToastPopup';
import { Typography } from 'shared/ui/typography/Typography';
import styled, { keyframes } from 'styled-components';

export const ResetPassword = () => {
  const [showToast, setShowToast] = useState(false);
  const initialValues = {
    password: '',
    passwordConfirm: '', // 비밀번호 확인 입력 추가
  };
  const navigate = useNavigate();

  const { code } = useParams<{ code: string }>();

  const { values, handleChange, errors } = useForm(initialValues, ['email']);
  const handleSubmit = async (password: string) => {
    const data = { password: password };

    try {
      const response = await axios.post(`${API.PASSWORD_RESET}/${code}`, data);
      setShowToast(true);
      handleRedirectToLogin();
    } catch (error) {
      console.error('Error getting recommendations:', error);
    }
  };

  const handleRedirectToLogin = () => {
    setTimeout(() => {
      setShowToast(false);
      navigate(ROUTES_PATH.signin); // 로그인 페이지로 이동
    }, 4000); // 2초 후에 실행
  };

  const isPasswordMatch =
    values.password === values.passwordConfirm &&
    values.password !== '' &&
    values.passwordConfirm !== '';

  return (
    <ResetPasswordWrapper>
      <StyledTypography className='title' variant={'mainTitle01'}>
        비밀번호 재설정
      </StyledTypography>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '46px' }}>
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
      </div>
      <ToastPopupBox>
        {showToast && <ToastPopup>비밀번호 재설정이 완료되었습니다.</ToastPopup>}
      </ToastPopupBox>
      <Button
        TypographyVariant='content'
        onClick={() => handleSubmit(values.password)}
        variant={isPasswordMatch ? 'primary' : 'primaryDisabled'}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          maxWidth: 'calc(100% - 40px)',
          pointerEvents: isPasswordMatch ? 'auto' : 'none',
        }}
      >
        비밀번호 재설정
      </Button>
    </ResetPasswordWrapper>
  );
};

const ResetPasswordWrapper = styled.div`
  .title {
    margin-bottom: 66px;
  }
`;

const StyledTypography = styled(Typography)`
  white-space: pre-wrap;
  margin: 15px 0 66px;
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  100% {
    opacity: 1;
    transform: translateY(20px);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(20px);
  }
  100% {
    opacity: 0;
    transform: translateY(50px);
  }
`;

const ToastPopupBox = styled.div`
  animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 1.5s;
  animation-fill-mode: forwards;
`;
