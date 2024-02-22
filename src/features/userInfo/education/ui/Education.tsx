import { useEducation } from 'features/userInfo/@hooks/useEducation';
import React, { useState } from 'react';
import colors from 'shared/styles/color';
import TextInput from 'shared/ui/input/TextInput';
import { OptionPicker } from 'shared/ui/select/OptionPicker';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

interface EducationProps {
  onOpenModal: () => void; // 함수 타입의 prop을 추가합니다.
}

export const Education: React.FC<EducationProps> = ({ onOpenModal }) => {
  // prop을 받아옵니다.
  const { education, handleEducationChange } = useEducation('');

  return (
    <EducationWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>학력 정보</StyledTypography>
        <Typography variant={'subtitle3'}>더 정확한 분석을 위해 프로필이 필요해요!</Typography>
      </div>
      <OptionPicker label='학력 선택' onClick={onOpenModal} />
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
