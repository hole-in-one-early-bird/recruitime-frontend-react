import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import colors from 'shared/styles/color';
import styled from 'styled-components';
import { Typography } from '../typography/Typography';

const routeTitles: { [key: string]: string } = {
  [ROUTES_PATH.mypage]: '마이페이지',
  [ROUTES_PATH.userInfo]: '프로필 저장',
  [ROUTES_PATH.profile]: '프로필 입력',
  [ROUTES_PATH.track]: '흥미 분야 선택',
  [ROUTES_PATH.education]: '학력 적성 체크',
  [ROUTES_PATH.experience]: '경험 입력',
  [ROUTES_PATH.keyword]: '키워드 선택',
  [ROUTES_PATH.customizedCareer]: 'AI 맞춤 커리어',
  [ROUTES_PATH.chat]: '커리어 챗봇',
  [ROUTES_PATH.bookmark]: '북마크',
};

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const stepMapping: { [key: string]: number } = {
    '/profile': 1,
    '/track': 2,
    '/education': 3,
    '/experience': 4,
    '/keyword': 5,
  };

  const currentStep = stepMapping[pathname] || 0; // 현재 단계

  // 5개의 세그먼트를 생성합니다.
  const totalSteps = 5;
  const segments = Array.from({ length: totalSteps }, (_, i) => (
    <ProgressSegment key={i} active={i < currentStep} />
  ));

  const progressGauge = <ProgressGaugeContainer>{segments}</ProgressGaugeContainer>;
  const handlePreviousClick = () => {
    navigate(-1);
  };

  const renderHeaderContent = () => {
    const title = routeTitles[pathname] || '';

    switch (pathname) {
      case ROUTES_PATH.home:
        return (
          <HeaderContainer style={{ justifyContent: 'space-between' }}>
            <Typography variant={'logo'}>RECRUTAM</Typography>
            <Link to={ROUTES_PATH.home}>
              <img src={process.env.PUBLIC_URL + '/images/icon/homeIcon.png'} alt='homeIcon' />
            </Link>
          </HeaderContainer>
        );
      case ROUTES_PATH.signup:
        return (
          <>
            <HeaderContainer style={{ justifyContent: 'center' }}>
              <BackIcon
                src={`${process.env.PUBLIC_URL}/images/icon/arrowIcon.png`}
                alt='arrowIcon'
                onClick={handlePreviousClick}
              />
            </HeaderContainer>
          </>
        );
      case ROUTES_PATH.mypage:
      case ROUTES_PATH.userInfo:
      case ROUTES_PATH.findAccount:
        return (
          <HeaderContainer style={{ justifyContent: 'center' }}>
            <BackIcon
              src={`${process.env.PUBLIC_URL}/images/icon/arrowIcon.png`}
              alt='arrowIcon'
              onClick={handlePreviousClick}
            />
            <Title variant={'headerTitle'}>{title}</Title>
          </HeaderContainer>
        );
      case ROUTES_PATH.profile:
      case ROUTES_PATH.track:
      case ROUTES_PATH.education:
      case ROUTES_PATH.experience:
      case ROUTES_PATH.keyword:
        return (
          <>
            <HeaderContainer style={{ justifyContent: 'center' }}>
              <BackIcon
                src={`${process.env.PUBLIC_URL}/images/icon/arrowIcon.png`}
                alt='arrowIcon'
                onClick={handlePreviousClick}
              />
              <Title variant={'headerTitle'}>{title}</Title>
            </HeaderContainer>
            <ProgressGauge>{progressGauge}</ProgressGauge>
          </>
        );
      case ROUTES_PATH.customizedCareer:
        return (
          <HeaderContainer style={{ justifyContent: 'space-between' }}>
            <Link to={ROUTES_PATH.home}>
              <img src={process.env.PUBLIC_URL + '/images/icon/homeIcon.png'} alt='homeIcon' />
            </Link>
            <Title variant={'headerTitle'}>{title}</Title>
            <IconContainer>
              <img src={process.env.PUBLIC_URL + '/images/icon/shareIcon.png'} alt='shareIcon' />
              <img
                src={process.env.PUBLIC_URL + '/images/icon/inActiveBookmarkIcon.png'}
                alt='inActiveBookmarkIcon'
              />
            </IconContainer>
          </HeaderContainer>
        );
      case ROUTES_PATH.chat:
        return (
          <HeaderContainer style={{ justifyContent: 'space-between' }}>
            <BackIcon
              src={`${process.env.PUBLIC_URL}/images/icon/arrowIcon.png`}
              alt='arrowIcon'
              onClick={handlePreviousClick}
            />
            <Link to={ROUTES_PATH.home} className='chat'>
              <HomeIcon src={`${process.env.PUBLIC_URL}/images/icon/homeIcon.png`} alt='homeIcon' />
            </Link>
            <Title variant={'headerTitle'}>{title}</Title>
            <SaveIcon src={`${process.env.PUBLIC_URL}/images/icon/saveIcon.png`} alt='saveIcon' />
          </HeaderContainer>
        );
      default:
        return null;
    }
  };

  return <header>{renderHeaderContent()}</header>;
};

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 020px;
  .chat {
    position: absolute;
    left: 40px;
    cursor: pointer;
  }
`;

const BackIcon = styled.img`
  position: absolute;
  left: 0;
  cursor: pointer;
`;

const HomeIcon = styled.img``;

const SaveIcon = styled.img``;

const Title = styled(Typography)`
  flex-grow: 1;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  & > img:not(:last-child) {
    margin-right: 10px;
  }
`;

const ProgressGaugeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6px;
  margin: 8px 0;
`;

const ProgressSegment = styled.div<{ active: boolean }>`
  height: 100%;
  flex-grow: 1;
  background-color: ${({ active }) => (active ? colors.blue[400] : colors.gray[200])};
  margin: 0 4px;
  border-radius: 30px;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const ProgressGauge = styled.div`
  padding: 10px 0;
`;
