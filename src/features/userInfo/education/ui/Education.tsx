import { useEducation } from 'features/userInfo/@hooks/useEducation';
import React, { useState } from 'react';
import colors from 'shared/styles/color';
import TextInput from 'shared/ui/input/TextInput';
import { Modal } from 'shared/ui/modal/Modal';
import { OptionPicker } from 'shared/ui/select/OptionPicker';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

const activities = ['인턴', '동아리', '교내활동', '사회활동', '자원봉사', '경력', '어학', '자격증'];

export const Education = () => {
  // prop을 받아옵니다.
  const { education, handleEducationChange } = useEducation('');
  const [isOpen, setIsOpen] = useState(false); // 모달의 열림/닫힘 상태를 관리합니다.
  const [selectedOption, setSelectedOption] = useState(''); // 선택된 옵션을 관리합니다.

  const handleOpenModal = () => {
    // 모달을 열기 위한 핸들러 함수입니다.
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    // 모달을 닫기 위한 핸들러 함수입니다.
    setIsOpen(false);
  };

  const handleSelectOption = (option: string) => {
    // 옵션을 선택했을 때 처리할 핸들러 함수입니다.
    setSelectedOption(option);
    setIsOpen(false); // 옵션을 선택하면 모달을 닫습니다.
  };
  return (
    <EducationWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>학력 정보</StyledTypography>
        <Typography variant={'subtitle3'}>더 정확한 분석을 위해 프로필이 필요해요!</Typography>
      </div>

      <OptionPicker label='학력 선택' onClick={handleOpenModal} selectedOption={selectedOption} />
      <TextInput
        type='text'
        label='전공/계열'
        value={education}
        onChange={handleEducationChange}
        placeholder='전공 및 계열 입력'
        name={'education'}
      />
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSelect={handleSelectOption}
        selected={selectedOption}
        options={activities}
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
