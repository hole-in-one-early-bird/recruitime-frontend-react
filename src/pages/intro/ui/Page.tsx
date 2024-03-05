import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { Button } from 'shared/ui/button/Button';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const Intro = () => {
  return (
    <IntroWrapper>
      <StyledTypography
        variant={'largeTitle'}
      >{`안녕하세요!\n커리어 탐색 리쿠르탐이에요`}</StyledTypography>
      <Typography variant={'subtitle'}>AI 커리어 관련 서비스를 이용해보세요🔥</Typography>
      <img src={process.env.PUBLIC_URL + '/images/char/introRecruitime.png'} alt='characterImage' />
      <Link to={ROUTES_PATH.signin}>
        <Button
          variant={'primary'}
          style={{
            position: 'fixed',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          시작하기
        </Button>
      </Link>
    </IntroWrapper>
  );
};

const IntroWrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 200px;
    right: -47px;
  }
`;

const StyledTypography = styled(Typography)`
  margin-top: 50px;
  white-space: pre-wrap;
`;
