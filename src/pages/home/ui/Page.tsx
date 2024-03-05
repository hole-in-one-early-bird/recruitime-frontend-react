import { MainContent } from 'features/home/ui/MainContent';
import React from 'react';
import styled from 'styled-components';

export const Home = () => {
  return (
    <HomeWrapper>
      <MainContent />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div``;
