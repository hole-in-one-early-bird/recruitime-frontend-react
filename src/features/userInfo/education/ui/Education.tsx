import { useEducation } from 'features/userInfo/@hooks/useEducation';
import React, { useState } from 'react';
import colors from 'shared/styles/color';
import TextInput from 'shared/ui/input/TextInput';
import { OptionPicker } from 'shared/ui/select/OptionPicker';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const Education = () => {
  const { education, handleEducationChange } = useEducation(''); // 초기값을 빈 문자열로 설정

  return (
    <EducationWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>학력 정보</StyledTypography>
        <Typography variant={'subtitle3'}>더 정확한 분석을 위해 프로필이 필요해요!</Typography>
      </div>
      <OptionPicker label='학력 선택' />
      <TextInput
        type='text'
        label='전공/계열'
        value={education}
        onChange={handleEducationChange}
        placeholder='전공 및 계열 입력'
        name={'education'}
      />
    </EducationWrapper>
  );
};

const EducationWrapper = styled.div`
  padding: 30px 0;
  border-bottom: 2px solid ${colors.gray[200]};
  .title {
    margin-bottom: 46px;
  }
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 8px;
`;
