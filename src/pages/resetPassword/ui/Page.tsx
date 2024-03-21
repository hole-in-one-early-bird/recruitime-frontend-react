import { ResetPassword } from 'features/auth/resetPassword/ui/ResetPassword';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ToastPopup from 'shared/ui/toast/ToastPopup';
import styled, { keyframes } from 'styled-components';

export const ResetPasswordPage = () => {
  const [showToast, setShowToast] = useState(false);
  const location = useLocation();

  return (
    <div>
      <ResetPassword setShowToast={setShowToast} />
      <ToastPopupBox>
        {showToast && <ToastPopup>비밀번호 재설정이 완료되었습니다.</ToastPopup>}
      </ToastPopupBox>
    </div>
  );
};
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

const ToastPopupBox = styled.div`
  animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 1.5s;
  animation-fill-mode: forwards;
`;
