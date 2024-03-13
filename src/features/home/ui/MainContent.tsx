import axios from 'axios';
import { API } from 'config';
import { getAuthTokenFromCookie } from 'features/auth/api/authService';
import { useModal } from 'features/userInfo/@hooks/useModal';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import colors from 'shared/styles/color';
import { Modal, PopupModal } from 'shared/ui/modal/Modal';
import { Typography } from 'shared/ui/typography/Typography';

import { UserDataType, useUserStore } from 'shared/zustand/userStore';
import styled from 'styled-components';
import { AIInteractive } from 'widgets/aIInteractiveCard/ui/AIInteractive';

export const MainContent = () => {
  const [isFirstAIClicked, setFirstAIClicked] = useState(false);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { setUserDataStore } = useUserStore();

  const navigate = useNavigate();
  const handleFirstAIClick = () => {
    setFirstAIClicked(true);
    handleOpenModal();
  };

  const getProfileData = async () => {
    try {
      const token = getAuthTokenFromCookie();
      const response = await axios.get(`${API.GETPROFILE}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const profileData = response.data.data;

      // Map the received profile data to your UserDataType
      const mappedData: Partial<UserDataType> = {
        name: profileData.name,
        gender: profileData.gender,
        age: profileData.age,
        education: profileData.highestDegree, // Assuming highestDegree is the education field
        major: profileData.major,
        experiences: profileData.experiences.map((exp: { activity: any; content: any }) => ({
          experience_type: exp.activity,
          experience_content: exp.content,
        })),
        // Add other mappings as needed
      };

      // Use the setUserDataStore method to update the state
      setUserDataStore(mappedData);

      // Navigate to the profile page after updating the state
      navigate(ROUTES_PATH.profile);
    } catch (error) {
      throw error;
    }
  };

  const handleNoClick = () => {
    // "아니요"를 눌렀을 때 초기화 작업 수행
    useUserStore.setState({
      userDataStore: {
        name: '',
        gender: '',
        age: '',
        aboutMe: '',
        interests: [],
        education: '',
        major: '',
        majorCheck: '',
        experiences: [],
        experienceOption: '',
        experienceDetail: '',
        userKeywords: [],
      },
    });

    // ROUTES_PATH.profile로 이동
    navigate(ROUTES_PATH.profile);
  };

  return (
    <MainContentWrapper>
      <TitleBox>
        <StyledTypography variant={'largeTitle'}>
          {`AI 커리어 탐색이`} <span style={{ color: colors.blue[500] }}>리쿠르탐</span> {`과\n`}
          {`커리어 탐색을 함께하세요`}
        </StyledTypography>
        <div className='sub'>
          <Typography variant={'headline2'} style={{ color: colors.gray[600] }}>
            맞춤 커리어 추천과 이력서 코칭을 받아보세요
          </Typography>
          <img src={process.env.PUBLIC_URL + '/images/icon/fireIcon.png'} alt='fireIcon' />
        </div>
      </TitleBox>
      <ContentBox>
        <AIInteractive
          titleChildren={'맞춤형 AI 커리어 추천'}
          subChildren={'나에게 딱 맞는 커리어 가이드'}
          alt={'character'}
          src={'char/recruitime'}
          onClick={handleFirstAIClick}
        />

        <AIInteractive
          titleChildren={'맞춤형 AI 이력서 코칭'}
          subChildren={'막막한 자기소개서 첫 걸음부터'}
          alt={'note'}
          src={'icon/note'}
        />
      </ContentBox>
      {isFirstAIClicked && (
        <PopupModal
          isOpen={isOpen}
          onClose={handleCloseModal}
          content={'content'}
          onClickYes={getProfileData}
          onClickNo={handleNoClick}
        />
      )}
    </MainContentWrapper>
  );
};

const MainContentWrapper = styled.div`
  .sub {
    display: flex;
    align-items: flex-end;
    gap: 3px;
    img {
      transform: translateY(-2px);
    }
  }
`;

const UserIcon = styled.img`
  display: block;
  margin-left: auto;
`;

const TitleBox = styled.div`
  margin-top: 46px;
  margin-bottom: 106px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledTypography = styled(Typography)`
  margin: 50px 0 2px;
  white-space: pre-wrap;
`;
