import { useUserData } from 'features/aiCareer/@hooks/useUserData';
import { useModal } from 'features/userInfo/@hooks/useModal';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { activities, initialValues } from 'shared/constants/data';
import { ROUTES_PATH } from 'shared/constants/routes';
import colors from 'shared/styles/color';
import { common } from 'shared/styles/common';
import { Button } from 'shared/ui/button/Button';
import { TextInput } from 'shared/ui/input/TextInput';
import { Modal } from 'shared/ui/modal/Modal';
import { OptionPicker } from 'shared/ui/select/OptionPicker';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const ExperienceForm = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { userData, handleSelect, addExperience, removeExperience } = useUserData(initialValues);

  const handleSelectOption = (option: string) => {
    handleSelect('experienceOption', option);
    handleCloseModal();
  };

  const handleExperienceChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSelect('experienceDetail', e.target.value);
  };

  useEffect(() => {
    sessionStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]); // userData가 변경될 때마다 세션 스토리지를 업데이트합니다.

  return (
    <ExperienceWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>경험을 입력해 주세요!</StyledTypography>
        <Typography variant={'subtitle3'}>다양한 활동 경험들을 간단히 입력해 주세요</Typography>
      </div>
      <div className='optionPickerBox'>
        <OptionPicker
          onClick={handleOpenModal}
          selectedOption={userData.experienceOption}
          children='경험선택'
        />
      </div>
      <AddExperienceWrapper>
        <StyledTextInput
          type='text'
          value={userData.experienceDetail}
          onChange={handleExperienceChange}
          placeholder='경험 내용 입력'
          name={'experienceDetail'}
          caption='최대 15자까지 입력할 수 있어요.'
          maxLength={15}
        />
        <StyledButton
          variant={
            !userData.experienceOption || !userData.experienceDetail || userData.experiences.length >= 5
              ? 'inactive'
              : 'confirm'
          }
          onClick={() => addExperience(userData.experienceOption, userData.experienceDetail)}
          disabled={
            !userData.experienceOption || !userData.experienceDetail || userData.experiences.length >= 5
          }
        >
          입력하기
        </StyledButton>
      </AddExperienceWrapper>
      {userData.experiences.length === 0 ? (
        <EmptyBox>
          <img src={process.env.PUBLIC_URL + '/images/char/listRecruitime.png'} alt='characterImage' />
          <Typography variant={'caption4'}>5개까지만 알려주세요</Typography>
        </EmptyBox>
      ) : (
        <ListBox>
          {userData.experiences.map((e, index) => (
            <ExperienceItem key={index}>
              <Typography variant={'subtitle'}>{e.experience_type}</Typography>
              <Typography variant={'subtitle2'}>{e.experience_content}</Typography>
              <img
                onClick={() => removeExperience(index)}
                src={process.env.PUBLIC_URL + '/images/icon/closeIcon.png'}
                alt='closeIcon'
              />
            </ExperienceItem>
          ))}
        </ListBox>
      )}
      <StyledButton
        variant={'primary'}
        style={{
          position: 'fixed',
          bottom: '38px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Link to={ROUTES_PATH.keyword}>계속하기</Link>
      </StyledButton>
      <Modal
        label='경험선택'
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSelect={handleSelectOption}
        selected={userData.experienceOption}
        options={activities}
        $isTwoColumns
      />
    </ExperienceWrapper>
  );
};

const ExperienceWrapper = styled.div`
  position: relative;
  padding: 12px 0;
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
