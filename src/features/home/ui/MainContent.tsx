import axios from 'axios';
import { API } from 'config';
import { getAuthTokenFromCookie } from 'features/auth/api/authService';
import { useModal } from 'features/userInfo/@hooks/useModal';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import colors from 'shared/styles/color';
import { PopupModal, PopupResumeModal } from 'shared/ui/modal/Modal';
import { Typography } from 'shared/ui/typography/Typography';
import { useModalStore } from 'shared/zustand/modalStore';

import { UserDataType, useUserStore } from 'shared/zustand/userStore';
import styled from 'styled-components';
import { AIInteractive } from 'widgets/aIInteractiveCard/ui/AIInteractive';

export const MainContent = () => {
  const [isFirstAIClicked, setFirstAIClicked] = useState(false);
  const [isSecondAIClicked, setSecondAIClicked] = useState(false);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { setUserDataStore } = useUserStore();
  const modalStore = useModalStore();
  const navigate = useNavigate();

  const handleFirstAIClick = () => {
    modalStore.firstModal.setOpen(true);
  };
  const handleSecondAIClick = () => {
    modalStore.secondModal.setOpen(true);
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

      if (!profileData) {
        // 데이터가 없는 경우에 대한 처리
        console.error('프로필 데이터가 없습니다.');
        // 또는 다른 작업을 수행할 수 있습니다.
        return;
      }

      // 데이터가 있는 경우, 해당 데이터를 매핑하여 사용합니다.
      const mappedData: Partial<UserDataType> = {
        name: profileData.name,
        gender: profileData.gender,
        age: profileData.age,
        education: profileData.highestDegree,
        major: profileData.major,
        experiences: profileData.experiences.map((exp: { activity: any; content: any }) => ({
          activity: exp.activity,
          content: exp.content,
        })),
        // 필요한 경우 다른 필드들을 매핑합니다.
      };
      navigate('/profile');
      setUserDataStore(mappedData);
      modalStore.firstModal.setOpen(false);
    } catch (error) {
      alert('저장된 데이터가 없습니다.');
      console.error('프로필 데이터를 가져오는 중 오류가 발생했습니다:');
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
    modalStore.firstModal.setOpen(false);
  };

  return (
    <MainContentWrapper>
      <TitleBox>
        <StyledTypography variant={'mainTitle01'}>
          {`AI 커리어 탐색이`} <span style={{ color: colors.blue[500] }}>리쿠르탐</span>
          {`과\n`}
          {`커리어 탐색을 함께하세요`}
        </StyledTypography>
        <div className='sub'>
          <Typography variant={'subTitle01'} style={{ color: colors.gray[600] }}>
            맞춤 커리어 추천과 이력서 코칭을 받아보세요
          </Typography>
          <img src={process.env.PUBLIC_URL + '/images/icon/fireIcon.svg'} alt='fireIcon' />
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
          onClick={handleSecondAIClick}
        />
      </ContentBox>
      {modalStore.firstModal.isOpen && (
        <PopupModal
          isOpen={modalStore.firstModal.isOpen}
          onClose={() => modalStore.firstModal.setOpen(false)}
          content1={'입력한 프로필을 불러올까요?'}
          content2={'저장하신 개인정보가 자동으로 입력됩니다.'}
          onClickYes={getProfileData}
          onClickNo={handleNoClick}
        />
      )}
      {modalStore.secondModal.isOpen && (
        <PopupResumeModal
          isOpen={modalStore.secondModal.isOpen}
          onClose={() => modalStore.secondModal.setOpen(false)}
          content1={'현재 준비중인 서비스 입니다.'}
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

const TitleBox = styled.div`
  margin-bottom: 106px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledTypography = styled(Typography)`
  margin: 44px 0 2px;
  white-space: pre-wrap;
`;
