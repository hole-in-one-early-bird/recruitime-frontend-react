import { getCookie } from 'features/auth/api/authService';
import { MainContent } from 'features/home/ui/MainContent';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import styled from 'styled-components';

export const Home = () => {
  const navigate = useNavigate();
  // 쿠키에서 토큰을 읽는 로직 (쿠키 세션 라이브러리를 사용하는 것을 가정)
  const accessToken = getCookie('accessToken');
  const isAuthenticated = !!accessToken;
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTES_PATH.signin);
    }
  });
  // 토큰이 없으면 로그인 페이지로 리다이렉트

  return (
    <HomeWrapper>
      <MainContent />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div``;
