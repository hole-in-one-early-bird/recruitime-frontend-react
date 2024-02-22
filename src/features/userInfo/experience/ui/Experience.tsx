import React from 'react';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';
const activities = ['인턴', '동아리', '교내활동', '사회활동', '자원봉사', '경력', '어학', '자격증'];
export const Experience = () => {
  return (
    <ExperienceWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>나의 경험 작성</StyledTypography>
        <Typography variant={'subtitle3'}>다양한 활동 경험들을 간단히 입력해 주세요</Typography>
      </div>
    </ExperienceWrapper>
  );
};

const ExperienceWrapper = styled.div`
  .title {
    margin-bottom: 46px;
  }
`;

const StyledTypography = styled(Typography)`
  margin: 48px 0 8px;
`;
