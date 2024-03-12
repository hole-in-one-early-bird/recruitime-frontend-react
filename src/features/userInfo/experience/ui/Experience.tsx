import { useModal } from 'features/userInfo/@hooks/useModal';
import { UserInfoData, useUserInfoData } from 'features/userInfo/@hooks/useUserInfoData';
import React, { useState } from 'react';
import { activities } from 'shared/constants/data';
import colors from 'shared/styles/color';
import { common } from 'shared/styles/common';
import { Button } from 'shared/ui/button/Button';
import { TextInput } from 'shared/ui/input/TextInput';
import { Modal } from 'shared/ui/modal/Modal';
import { OptionPicker } from 'shared/ui/select/OptionPicker';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';
interface Experience {
  activity: string;
  content: string;
}
// Experience.tsx
interface ExperienceProps {
  userInfoData: {
    experience: string;
    experiences: Experience[];
  };
  handlers: {
    addExperience: (activity: string, content: string) => void;
    removeExperience: (index: number) => void;
    handleExperienceChange: (value: string) => void;
  };
}

export const Experience: React.FC<ExperienceProps> = ({ userInfoData, handlers }) => {
  const { experience, experiences } = userInfoData;
  const { addExperience, removeExperience, handleExperienceChange } = handlers;

  const [selectedOption, setSelectedOption] = useState('');

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

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
        <Typography variant={'headline2'} style={{ color: colors.gray[500] }}>
          다양한 활동 경험들을 간단히 입력해 주세요
        </Typography>
      </div>
      <div className='optionPickerBox'>
        <OptionPicker onClick={handleOpenModal} selectedOption={selectedOption} children='경험선택' />
      </div>

      <AddExperienceWrapper>
        <StyledTextInput
          type='text'
          value={experience}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleExperienceChange(e.target.value)}
          placeholder='경험 내용 입력'
          name={'experience'}
          caption='최대 15자까지 입력할 수 있어요.'
          maxLength={15}
        />
        <StyledButton
          variant={!selectedOption || !experience || experiences.length >= 5 ? 'inConfirm' : 'confirm'}
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
              <Typography variant={'subtitle'}>{e.activity}</Typography>
              <Typography variant={'headline2'} style={{ color: colors.gray[700] }}>
                {e.content}
              </Typography>
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
        $isTwoColumns
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
