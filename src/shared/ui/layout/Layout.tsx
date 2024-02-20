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
      {props.headerSlot}
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${colors.white};
`;

const ContentContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
`;
