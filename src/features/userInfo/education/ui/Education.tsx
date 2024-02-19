import React from 'react';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const Education = () => {
  return (
    <EducationWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>학력 정보</StyledTypography>
        <Typography variant={'subtitle3'}>더 정확한 분석을 위해 프로필이 필요해요!</Typography>
      </div>
    </EducationWrapper>
  );
};

const EducationWrapper = styled.div`
  .title {
    margin-bottom: 46px;
  }
`;

const StyledTypography = styled(Typography)`
  margin: 48px 0 8px;
`;
