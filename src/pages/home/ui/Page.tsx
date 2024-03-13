import { getCookie } from 'features/auth/api/authService';
import { MainContent } from 'features/home/ui/MainContent';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import ToastPopup from 'shared/ui/toast/ToastPopup';
import styled, { keyframes } from 'styled-components';

export const Home = () => {
  const [showToast, setShowToast] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // 쿠키에서 토큰을 읽는 로직 (쿠키 세션 라이브러리를 사용하는 것을 가정)
  const accessToken = getCookie('accessToken');
  const isAuthenticated = !!accessToken;
  // 토큰이 없으면 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTES_PATH.signin);
    }
  });

  useEffect(() => {
    if (location.state?.saveSuccess) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('.', { state: {} });
      }, 2000); // 2초 후에 토스트 팝업 숨기기
    }
  }, [location, navigate]);

  return (
    <HomeWrapper>
      <MainContent />
      <ToastPopupBox>
        {showToast && <ToastPopup>프로필 저장이 완료되었습니다!</ToastPopup>}
      </ToastPopupBox>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div``;

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
  margin-top: 30px;
  animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 1.5s;
  animation-fill-mode: forwards;
`;
