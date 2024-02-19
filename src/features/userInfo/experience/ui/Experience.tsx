import React from 'react';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

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
