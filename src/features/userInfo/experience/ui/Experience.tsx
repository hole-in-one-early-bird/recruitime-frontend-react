import { useExperience } from 'features/userInfo/@hooks/useExperience';
import { useExperienceList } from 'features/userInfo/@hooks/useExperienceList';
import { useModal } from 'features/userInfo/@hooks/useModal';
import React, { useState } from 'react';
import colors from 'shared/styles/color';
import { common } from 'shared/styles/common';
import { Button } from 'shared/ui/button/Button';
import { TextInput } from 'shared/ui/input/TextInput';
import { Modal } from 'shared/ui/modal/Modal';
import { OptionPicker } from 'shared/ui/select/OptionPicker';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

const activities = ['인턴', '동아리', '교내활동', '사회활동', '자원봉사', '경력', '어학', '자격증'];

export const Experience = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const { experience, handleExperienceChange } = useExperience('');
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { experiences, addExperience, removeExperience } = useExperienceList();

  const handleAddExperience = () => {
    if (!selectedOption || !experience || experiences.length >= 5) {
      return;
    }
    addExperience(selectedOption, experience);
    handleExperienceChange('');
    setSelectedOption('');
  };
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
          onChange={(e: { target: { value: string } }) => handleExperienceChange(e.target.value)}
          placeholder='경험 내용 입력'
          name={'education'}
          caption='최대 15자까지 입력할 수 있어요.'
          maxLength={15}
        />
        <StyledButton
          variant={!selectedOption || !experience || experiences.length >= 5 ? 'inactive' : 'confirm'}
          onClick={handleAddExperience}
          disabled={!selectedOption || !experience || experiences.length >= 5}
        >
          입력하기
        </StyledButton>
      </AddExperienceWrapper>
      {experiences.length === 0 ? (
        <EmptyBox>
          <img src={process.env.PUBLIC_URL + '/images/char/listRecruitime.png'} alt='characterImage' />
          <Typography variant={'caption4'}>5개까지만 알려주세요</Typography>
        </EmptyBox>
      ) : (
        <ListBox>
          {experiences.map((e, index) => (
            <ExperienceItem key={index}>
              <Typography variant={'subtitle'}>{e.option}</Typography>
              <Typography variant={'subtitle2'}>{e.detail}</Typography>
              <img
                onClick={() => removeExperience(index)}
                src={process.env.PUBLIC_URL + '/images/icon/closeIcon.png'}
                alt='closeIcon'
              />
            </ExperienceItem>
          ))}
        </ListBox>
      )}
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
  align-items: start;
  column-gap: 10px;
  margin-bottom: 26px;
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

const ListBox = styled.div`
  margin-bottom: 50px;
`;

const EmptyBox = styled.div`
  margin-bottom: 50px;
  ${common.flexCenterColumn}
  gap: 7px;
`;

const ExperienceItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
  background-color: ${colors.blue[50]};
  border-radius: 10px;
  > :last-child {
    justify-self: end;
  }
`;
