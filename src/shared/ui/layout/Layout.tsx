import React, { ReactNode, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import colors from 'shared/styles/color';
import styled from 'styled-components';

type Props = {
  headerSlot: ReactNode;
};

export const Layout = (props: Props) => {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  });

  return (
    <LayoutContainer>
      <ContentContainer>
        {props.headerSlot}
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  position: relative;

  background-color: ${colors.white};
`;

const ContentContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  padding: 20px;
  height: calc(var(--vh, 1vh) * 100);
  box-sizing: border-box;
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
