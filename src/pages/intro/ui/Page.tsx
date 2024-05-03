import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { ROUTES_PATH } from '../../../shared/constants/routes';
import colors from '../../../shared/styles/color';
import { Button } from '../../../shared/ui/button/Button';
import { Typography } from '../../../shared/ui/typography/Typography';

export const Intro = () => {
  return (
    <IntroWrapper>
      <StyledTypography variant={'mainTitle01'}>
        {`안녕하세요!\n커리어 탐색 `}
        <span style={{ color: colors.blue[500] }}>리쿠르탐</span>
        {`이에요`}
      </StyledTypography>
      <div className='sub'>
        <Typography variant={'subTitle01'} style={{ color: colors.gray[600] }}>
          AI 커리어 관련 서비스를 이용해보세요
        </Typography>
        <img src={'/images/icon/fireIcon.svg'} alt='fireIcon' />
      </div>
      <div className='bg'>
        <img src={'/images/char/introRecruitime.svg'} alt='characterImage' />
      </div>
      <div>
        <Link to={ROUTES_PATH.signin}>
          <Button
            variant={'primary'}
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              maxWidth: 'calc(100% - 40px)',
            }}
            TypographyVariant={'button01'}
          >
            시작하기
          </Button>
        </Link>
      </div>
    </IntroWrapper>
  );
};

const IntroWrapper = styled.div`
  .bg {
    position: relative;
    img {
      position: absolute;
      top: 156px;
      right: -25px;
    }
  }

  .sub {
    display: flex;
    align-items: flex-end;
    gap: 3px;
    img {
      transform: translateY(-2px);
    }
  }
`;

const StyledTypography = styled(Typography)`
  color: ${colors.gray[900]};
  margin: 30px 0 2px;
  white-space: pre-wrap;
`;
