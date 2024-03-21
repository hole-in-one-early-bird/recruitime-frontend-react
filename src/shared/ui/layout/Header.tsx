import axios from 'axios';
import { API } from 'config';
import html2canvas from 'html2canvas';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import colors from 'shared/styles/color';
import useBookmarkStore from 'shared/zustand/bookmarkStore';
import { useChatStore } from 'shared/zustand/chatStore';
import useCustomizedCareerStore from 'shared/zustand/store';
import styled from 'styled-components';
import { Typography } from '../typography/Typography';

const routeTitles: { [key: string]: string } = {
  [ROUTES_PATH.mypage]: '마이페이지',
  [ROUTES_PATH.userInfo]: '프로필 저장',
  [ROUTES_PATH.editUserInfo]: '프로필 수정',
  [ROUTES_PATH.profile]: '프로필 입력',
  [ROUTES_PATH.track]: '흥미 분야 선택',
  [ROUTES_PATH.education]: '학력 적성 체크',
  [ROUTES_PATH.experience]: '경험 입력',
  [ROUTES_PATH.keyword]: '키워드 선택',
  [ROUTES_PATH.customizedCareer]: 'AI 맞춤 커리어',
  [ROUTES_PATH.chat]: '커리어 챗봇',
  [ROUTES_PATH.bookmark]: '내 추천 커리어',
};

export const Header = () => {
  const { chatBoxRef } = useChatStore();
  const resultData = useCustomizedCareerStore((state) => state.userData);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const { bookmark, setBookmark } = useBookmarkStore();

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

  const handleBookmarkClick = () => {
    setBookmark(!bookmark);
  };

  const copyToClipboard = async () => {
    const fullUrl = `${window.location.href}?code=${resultData.jobRecommendationCode}`;
    try {
      await axios.get(API.GETSHARELINK, {
        params: {
          code: resultData.jobRecommendationCode,
        },
      });
      await navigator.clipboard.writeText(fullUrl); // 클립보드에 문자열 복사
      alert('링크가 클립보드에 복사되었습니다.');
    } catch (err) {
      alert('링크 복사에 실패했습니다.');
      console.error('Failed to copy: ', err);
    }
  };

  const addBookmark = async () => {
    handleBookmarkClick();
    const data = {
      jobName: resultData.job,
      code: resultData.jobRecommendationCode,
    };
    try {
      await axios.post(API.BOOKMARK, data);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  const deleteBookmark = async () => {
    handleBookmarkClick();
    try {
      await axios.delete(API.BOOKMARK, {
        data: {
          code: resultData.jobRecommendationCode,
        },
      });
    } catch (err) {
      console.error('Failed to delete bookmark: ', err);
    }
  };
  const downloadImage = (dataUrl: string, filename: string) => {
    // `<a>` 태그를 생성합니다.
    const link = document.createElement('a');
    // 데이터 URL을 `href` 속성에 설정합니다.
    link.href = dataUrl;
    // 다운로드할 파일 이름을 `download` 속성에 설정합니다.
    link.download = filename;
    // `<a>` 태그를 클릭하여 다운로드를 시작합니다.
    link.click();
  };

  const captureChat = async () => {
    if (chatBoxRef && chatBoxRef.current) {
      try {
        const canvas = await html2canvas(chatBoxRef.current);
        const image = canvas.toDataURL('image/svg');
        downloadImage(image, 'chat-capture.svg');
      } catch (error) {
        console.error('채팅 캡처에 실패했습니다:', error);
      }
    }
  };

  const renderHeaderContent = () => {
    const title = routeTitles[pathname] || '';

    switch (pathname) {
      case ROUTES_PATH.home:
        return (
          <HeaderContainer style={{ justifyContent: 'space-between' }}>
            <Typography variant={'mainTitle03'} style={{ fontWeight: 700, color: colors.blue[500] }}>
              RECRUTAM
            </Typography>
            <Link to={ROUTES_PATH.mypage}>
              <img src={process.env.PUBLIC_URL + '/images/icon/userIcon.svg'} alt='userIcon' />
            </Link>
          </HeaderContainer>
        );
      case ROUTES_PATH.signup:
        return (
          <>
            <HeaderContainer style={{ justifyContent: 'center' }}>
              <BackIcon
                src={`${process.env.PUBLIC_URL}/images/icon/arrowIcon.svg`}
                alt='arrowIcon'
                onClick={handlePreviousClick}
              />
            </HeaderContainer>
          </>
        );
      case ROUTES_PATH.mypage:
        return (
          <HeaderContainer style={{ justifyContent: 'center' }}>
            <BackIcon
              src={`${process.env.PUBLIC_URL}/images/icon/arrowIcon.svg`}
              alt='arrowIcon'
              onClick={() => navigate('/home')}
            />
            <Title variant={'header'} style={{ color: colors.gray[700] }}>
              {title}
            </Title>
          </HeaderContainer>
        );
      case ROUTES_PATH.userInfo:
      case ROUTES_PATH.editUserInfo:
      case ROUTES_PATH.findAccount:
      case ROUTES_PATH.resetPassword:
      case ROUTES_PATH.bookmark:
        return (
          <HeaderContainer style={{ justifyContent: 'center' }}>
            <BackIcon
              src={`${process.env.PUBLIC_URL}/images/icon/arrowIcon.svg`}
              alt='arrowIcon'
              onClick={handlePreviousClick}
            />
            <Title variant={'header'} style={{ color: colors.gray[700] }}>
              {title}
            </Title>
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
                src={`${process.env.PUBLIC_URL}/images/icon/arrowIcon.svg`}
                alt='arrowIcon'
                onClick={handlePreviousClick}
              />
              <Title variant={'header'} style={{ color: colors.gray[700] }}>
                {title}
              </Title>
            </HeaderContainer>
            <ProgressGauge>{progressGauge}</ProgressGauge>
          </>
        );
      case ROUTES_PATH.customizedCareer:
        return (
          <HeaderContainer style={{ justifyContent: 'space-between', marginBottom: '20px' }}>
            <Link to={ROUTES_PATH.home}>
              <img src={process.env.PUBLIC_URL + '/images/icon/homeIcon.svg'} alt='homeIcon' />
            </Link>
            <Title variant={'header'} style={{ color: colors.gray[700] }}>
              {title}
            </Title>
            <IconContainer>
              <div onClick={copyToClipboard}>
                <img src={process.env.PUBLIC_URL + '/images/icon/shareIcon.svg'} alt='shareIcon' />
              </div>
              {bookmark ? (
                <div onClick={deleteBookmark}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/icon/activeBookmarkIcon.svg'}
                    alt='inActiveBookmarkIcon'
                  />
                </div>
              ) : (
                <div onClick={addBookmark}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/icon/inActiveBookmarkIcon.svg'}
                    alt='inActiveBookmarkIcon'
                  />
                </div>
              )}
            </IconContainer>
          </HeaderContainer>
        );
      case ROUTES_PATH.chat:
        return (
          <HeaderContainer style={{ justifyContent: 'space-between' }}>
            <BackIcon
              src={`${process.env.PUBLIC_URL}/images/icon/arrowIcon.svg`}
              alt='arrowIcon'
              onClick={handlePreviousClick}
            />
            <Link to={ROUTES_PATH.home} className='chat'>
              <HomeIcon src={`${process.env.PUBLIC_URL}/images/icon/homeIcon.svg`} alt='homeIcon' />
            </Link>
            <Title variant={'header'} style={{ color: colors.gray[700] }}>
              {title}
            </Title>
            <SaveIcon
              onClick={captureChat}
              src={`${process.env.PUBLIC_URL}/images/icon/saveIcon.svg`}
              alt='saveIcon'
            />
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
  padding: 10px 0;
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

const SaveIcon = styled.img`
  cursor: pointer;
`;

const Title = styled(Typography)`
  flex-grow: 1;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  * {
    cursor: pointer;
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
