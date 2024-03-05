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
        <Typography className='title' variant={'largeTitle'}>
          로그인이 완료되었어요!
        </Typography>
        <DesContainer>
          <div className='des'>
            <StyledTypography variant={'caption'}>
              {`프로필 입력 시 더 편리하게\n커리어를 분석할 수 있어요!`}
            </StyledTypography>
          </div>
          <img src={process.env.PUBLIC_URL + '/images/char/recruitimeBg.png'} alt='characterImage' />
        </DesContainer>
      </CompleteContainer>
      <AuthOption>
        <Button variant={'primary'} style={{ marginBottom: '16px' }}>
          <Link to={ROUTES_PATH.userInfo}>프로필입력하기</Link>
        </Button>
        <Link to={ROUTES_PATH.home}>
          <Typography className='next' variant={'caption'}>
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
  .next {
    padding: 2px;
    border-bottom: 1px solid ${colors.gray[400]};
  }
`;

const DesContainer = styled.div`
  position: relative;
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
`;
