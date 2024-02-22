import { useExperience } from 'features/userInfo/@hooks/useExperience';
import { useModal } from 'features/userInfo/@hooks/useModal';
import React, { useState } from 'react';
import { common } from 'shared/styles/common';
import { Button } from 'shared/ui/button/Button';
import TextInput from 'shared/ui/input/TextInput';
import { Modal } from 'shared/ui/modal/Modal';
import { OptionPicker } from 'shared/ui/select/OptionPicker';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';
const activities = ['인턴', '동아리', '교내활동', '사회활동', '자원봉사', '경력', '어학', '자격증'];
export const Experience = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const { experience, handleExperienceChange } = useExperience('');
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    handleCloseModal();
  };

  return (
    <ExperienceWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>나의 경험 작성</StyledTypography>
        <Typography variant={'subtitle3'}>다양한 활동 경험들을 간단히 입력해 주세요</Typography>
      </div>
      <div className='optionPickerBox'>
        <OptionPicker onClick={handleOpenModal} selectedOption={selectedOption} children='경험선택' />
      </div>

      <AddExperienceWrapper>
        <StyledTextInput
          type='text'
          value={experience}
          onChange={handleExperienceChange}
          placeholder='경험 내용 입력'
          name={'education'}
          caption='최대 15자까지 입력할 수 있어요.'
        />
        <StyledButton variant={'primary'}>입력하기</StyledButton>
      </AddExperienceWrapper>

      <Modal
        label='경험선택'
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSelect={handleSelectOption}
        selected={selectedOption}
        options={activities}
        isTwoColumns
      />
    </ExperienceWrapper>
  );
};

const ExperienceWrapper = styled.div`
  position: relative;
  padding: 30px 0;
  .title {
    margin-bottom: 46px;
  }
  .optionPickerBox {
    margin-bottom: 10px;
  }
`;

const AddExperienceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 10px;
`;

const StyledTextInput = styled(TextInput)`
  grid-column: 1;
`;

const StyledButton = styled(Button)`
  grid-column: 2;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 8px;
`;
