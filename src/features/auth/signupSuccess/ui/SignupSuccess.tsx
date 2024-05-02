import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import colors from 'shared/styles/color';
import { common } from 'shared/styles/common';
import { Button } from 'shared/ui/button/Button';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const SignupSuccess = () => {
  return (
    <SignupSuccessWrapper>
      <CompleteContainer>
        <Typography className='title' variant={'mainTitle01'} style={{ color: colors.gray[900] }}>
          리쿠르탐에 오신걸 환영해요!
        </Typography>

        <Des>
          <div className='des'>
            <StyledTypography variant={'body04'} style={{ color: colors.gray[600] }}>
              {`프로필 입력 시 더 편리하게\n커리어를 분석할 수 있어요!`}
            </StyledTypography>
          </div>
          <img src={'/images/char/recruitimeBg.svg'} alt='characterImage' />
        </Des>
      </CompleteContainer>
      <AuthOption>
        <Button variant={'primary'} style={{ marginBottom: '16px' }} TypographyVariant={'button01'}>
          <Link to={ROUTES_PATH.userInfo}>프로필 입력하기</Link>
        </Button>
        <Link to={ROUTES_PATH.home}>
          <Typography className='next' variant={'caption01'} style={{ color: colors.gray[400] }}>
            다음에 하기
          </Typography>
        </Link>
      </AuthOption>
    </SignupSuccessWrapper>
  );
};

const SignupSuccessWrapper = styled.div`
  position: relative;
  ${common.flexCenterColumn}
  height: calc(100vh - 130px);
`;

const CompleteContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  .title {
    margin-bottom: 66px;
  }
`;

const Des = styled.div`
  position: relative;
  margin-left: 26px;
`;

const StyledTypography = styled(Typography)`
  position: absolute;
  top: -30px;
  left: -26px;
  display: inline-block;
  white-space: pre-wrap;
  line-height: 18px;
  padding: 8px 16px;
  border-radius: 9px;
  background-color: #f6f6f6;
`;

const AuthOption = styled.div`
  ${common.flexCenterColumn}
  width: 100%;
  position: fixed;
  bottom: 35px;
  .next {
    border-bottom: 1px solid ${colors.gray[400]};
  }
`;
