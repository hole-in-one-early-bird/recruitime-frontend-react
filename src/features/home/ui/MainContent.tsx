import React from 'react';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';
import { AIInteractive } from 'widgets/ui/aIInteractiveCard/AIInteractive';

export const MainContent = () => {
  return (
    <MainContentWrapper>
      <UserIcon src={process.env.PUBLIC_URL + `/images/icon/userIcon.png`} alt='userIcon' />
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
        />
        <AIInteractive
          titleChildren={'맞춤형 AI 이력서 코칭'}
          subChildren={'막막한 자기소개서 첫 걸음부터'}
          alt={'note'}
          src={'icon/note'}
        />
      </ContentBox>
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
