import React, { useEffect } from 'react';
import { Typography } from 'shared/ui/typography/Typography';
import styled, { keyframes } from 'styled-components';
import { FaCircleCheck } from 'react-icons/fa6';
import colors from 'shared/styles/color';
import { initialValues, profileAnalysisSteps } from 'shared/constants/data';
import { getAuthTokenFromCookie } from 'features/auth/api/authService';
import axios from 'axios';
import { API } from 'config';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { useUserData } from 'features/aiCareer/@hooks/useUserData';
import useCustomizedCareerStore from 'shared/zustand/store';

export const Loading = () => {
  const navigate = useNavigate();
  const { userDataStore } = useUserData(initialValues);
  const setUserData = useCustomizedCareerStore((state) => state.setUserData);

  const handleAiCareer = async () => {
    const { experienceOption, experienceDetail, ...userDataWithoutExcludedFields } = userDataStore;

    const userDataWithoutEmoji = {
      ...userDataWithoutExcludedFields,
      majorCheck: userDataStore.majorCheck
        ? userDataStore.majorCheck.replace(/[\uD800-\uDFFF].\s/, '')
        : '',
    };

    const token = getAuthTokenFromCookie();
    try {
      const response = await axios.post(API.RECOMMENDATION, userDataWithoutEmoji, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data.data);
      navigate(ROUTES_PATH.customizedCareer);
      console.log(response.data.data);
    } catch (error) {
      console.error('Error getting recommendations:', error);
    }
  };

  useEffect(() => {
    handleAiCareer();
  }, []);

  return (
    <LoadingWrapper>
      <ContentBox>
        <Character>
          <img
            src={process.env.PUBLIC_URL + 'images/char/watingCharacter.png'}
            alt='watingCharacterImg'
          />
        </Character>

        <DropShadowBox>
          <DropShadow />
          <DropShadow />
          <DropShadow />
        </DropShadowBox>
        <StyledTypography
          variant={'mainTitle01'}
        >{`리쿠르탐이\n맞춤 커리어를 찾고 있어요!`}</StyledTypography>
        <ProccessBox>
          {profileAnalysisSteps.map((item, index) => (
            <Proccess key={index}>
              <FaCircleCheck />
              <Typography variant={'body01'} style={{ color: colors.gray[700] }}>
                {item}
              </Typography>
            </Proccess>
          ))}
        </ProccessBox>
      </ContentBox>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div``;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const bounce1 = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
  
`;

const Character = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 50px;
  animation: ${bounce1} 2s infinite;
`;

const DropShadowBox = styled.div`
  margin-left: -5px;
  display: flex;
  gap: 10px;
  :nth-child(1) {
    animation: ${bounce1} 2s infinite;
    animation-delay: 0s; /* 첫 번째 요소는 딜레이 없음 */
  }

  :nth-child(2) {
    animation: ${bounce1} 2s infinite;
    animation-delay: 0.4s; /* 두 번째 요소는 0.5초 후에 시작 */
  }

  :nth-child(3) {
    animation: ${bounce1} 2s infinite;
    animation-delay: 0.5s; /* 세 번째 요소는 1초 후에 시작 */
  }
`;
const DropShadow = styled.div`
  margin-bottom: 22px;
  width: 10px;
  height: 10px;
  background-color: ${colors.blue[600]};
  border-radius: 10px;
`;

const colorChange = keyframes`
  0% {
    color:${colors.gray[300]};
  }
  100% {
    color:${colors.blue[400]};
  }
`;
const ProccessBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Proccess = styled.div`
  display: flex;
  color: ${colors.gray[400]};
  gap: 10px;
  align-items: center;
  animation: ${colorChange} 2s linear forwards;

  &:nth-child(1) {
    animation-delay: 2s;
  }
  &:nth-child(2) {
    animation-delay: 4s;
  }
  &:nth-child(3) {
    animation-delay: 6s;
  }
  &:nth-child(4) {
    animation-delay: 8s;
  }
  &:nth-child(5) {
    animation-delay: 10s;
  }
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  margin: 10px 0 48px;
  white-space: pre-wrap;
`;
