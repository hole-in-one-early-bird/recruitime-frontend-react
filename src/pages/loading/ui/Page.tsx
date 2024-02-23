import React from 'react';
import { Typography } from 'shared/ui/typography/Typography';
import styled, { keyframes } from 'styled-components';

const ProccessBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

const Proccess = styled.div`
  display: flex;
  color: ${(prop) => prop.theme.colors.gray400};
  gap: 10px;
  align-items: center;
  animation: ${colorChange} 2s linear forwards;
  :first-child {
    font-size: ${(prop) => prop.theme.fonts.waitingDescription};
  }
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

const profileAnalysisSteps = [
  '프로필을 읽고 있어요.',
  '관심 분야를 분석하고 있어요.',
  '가까운 단어를 분석하고 있어요.',
  '학력 · 적성을 분석하고 있어요.',
  '경험을 적용하고 있어요.',
];

type UserData = {
  profile: {
    id: number;
    name: string;
    gender: string;
    age: number;
    about_me: string;
  };
  education: {
    id: number;
    user_id: number;
    education: string;
    major: string;
    major_check: string;
  }[];
  experience: {
    id: number;
    user_id: number;
    experience_type: string;
    experience_content: string;
  }[];
  interest: {
    id: number;
    user_id: number;
    interest1: string;
    interest2: string;
    interest3: string;
  }[];
  keyword: {
    id: number;
    user_id: number;
    keyword: string;
    type: string;
  }[];
};

type TransformedDataItem = {
  role: string;
  content: string;
};

const Loading = () => {
  return (
    <LoadingWrapper>
      <ContentBox>
        <Character>
          <img src={process.env.PUBLIC_URL + '/image/watingCharacter.png'} alt='characterImage' />
        </Character>
        <DropShadowBox>
          <DropShadow />
          <DropShadow />
          <DropShadow />
        </DropShadowBox>
        <Typography variant={'title1'}>리쿠르탐이 맞춤 커리어를 찾고 있어요!</Typography>
        {/* <Title title='리쿠르탐이' />
        <Title title='맞춤 커리어를 찾고 있어요!' />
        <ProccessBox>
          {profileAnalysisSteps.map((item, index) => (
            <Proccess key={index}>
              <FaCircleCheck /> <SubTitle subtitle={item} isHome={false} />
            </Proccess>
          ))}
        </ProccessBox> */}
      </ContentBox>
    </LoadingWrapper>
  );
};

export default Loading;

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
  margin-bottom: 40px;
  animation: ${bounce1} 2s infinite;
`;

const DropShadowBox = styled.div`
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
  margin-bottom: 30px;
  width: 10px;
  height: 10px;
  background-color: ${(prop) => prop.theme.colors.black};
`;

const colorChange = keyframes`
  0% {
    color:#CCCCCC;
  }
  100% {
    color:#60A5FA;
  }
`;
