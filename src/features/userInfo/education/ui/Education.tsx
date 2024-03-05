import { useEducation } from 'features/userInfo/@hooks/useEducation';
import { useModal } from 'features/userInfo/@hooks/useModal';
import React, { useState } from 'react';
import { activities } from 'shared/constants/data';
import colors from 'shared/styles/color';
import { TextInput } from 'shared/ui/input/TextInput';
import { Modal } from 'shared/ui/modal/Modal';
import { OptionPicker } from 'shared/ui/select/OptionPicker';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const Education = () => {
  const { education, handleEducationChange } = useEducation('');
  const [selectedOption, setSelectedOption] = useState('');
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    handleCloseModal();
  };

  return (
    <EducationWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>학력 정보</StyledTypography>
        <Typography variant={'subtitle3'}>더 정확한 분석을 위해 프로필이 필요해요!</Typography>
      </div>
      <div className='optionPickerBox'>
        <OptionPicker
          label='학력 선택'
          onClick={handleOpenModal}
          selectedOption={selectedOption}
          children='학력선택'
        />
      </div>

      <StyledTextInput
        type='text'
        label='전공/계열'
        value={education}
        onChange={handleEducationChange}
        placeholder='전공 및 계열 입력'
        name={'education'}
      />
      <Modal
        label='학력선택'
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
  position: relative;
  padding: 30px 0;
  border-bottom: 2px solid ${colors.gray[200]};
  .title {
    margin-bottom: 46px;
  }
  .optionPickerBox {
    margin-bottom: 36px;
  }
`;

const StyledTextInput = styled(TextInput)`
  width: 60%;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 8px;
`;
