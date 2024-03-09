import axios from 'axios';
import { API } from 'config';
import { getAuthTokenFromCookie } from 'features/auth/api/authService';
import { useModal } from 'features/userInfo/@hooks/useModal';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
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
  return (
    <MainContentWrapper>
      <TitleBox>
        <StyledTypography
          variant={'largeTitle'}
        >{`AI 커리어 탐색이 리쿠르탐과 \n커리어 탐색을 함께하세요`}</StyledTypography>
        <Typography variant={'subtitle'}>맞춤 커리어 추천과 이력서 코칭을 받아보세요🔥</Typography>
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
          link={ROUTES_PATH.profile}
          onClick={getProfileData}
        />
      )}
    </MainContentWrapper>
  );
};

const MainContentWrapper = styled.div``;

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
  margin-top: 50px;
  white-space: pre-wrap;
`;
