import { useMatch } from 'features/aiCareer/@hooks/useMatch';
import { useUserData } from 'features/aiCareer/@hooks/useUserData';
import { useModal } from 'features/userInfo/@hooks/useModal';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { activities, edu, initialValues } from 'shared/constants/data';
import { ROUTES_PATH } from 'shared/constants/routes';
import colors from 'shared/styles/color';
import { Button } from 'shared/ui/button/Button';
import { TextInput } from 'shared/ui/input/TextInput';
import { Modal } from 'shared/ui/modal/Modal';
import { OptionPicker } from 'shared/ui/select/OptionPicker';
import { SelectType } from 'shared/ui/select/SelectButton';

import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const EducationForm = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { userData, handleSelect } = useUserData(initialValues);

  const handleSelectOption = (option: string) => {
    handleSelect('education', option);
    handleCloseModal();
  };

  const handleEducationChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSelect('major', e.target.value);
  };

  const handleMatchSelect = (option: string) => {
    handleSelect('majorCheck', option);
  };

  const isAllFieldsFilled =
    userData.education !== '' && userData.major !== '' && userData.majorCheck !== '';

  useEffect(() => {
    console.log(isAllFieldsFilled);
    sessionStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]); // userData가 변경될 때마다 세션 스토리지를 업데이트합니다.

  return (
    <EducationWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>학력과 적성을 체크할게요!</StyledTypography>
        <Typography variant={'subtitle3'}>전공 적성도를 체크하기 위한 과정이에요</Typography>
      </div>
      <div className='optionPickerBox'>
        <OptionPicker
          label='학력 선택'
          onClick={handleOpenModal}
          selectedOption={userData.education}
          children='학력선택'
        />
      </div>
      <StyledTextInput
        className='space'
        type='text'
        label='전공/계열'
        value={userData.major}
        onChange={handleEducationChange}
        placeholder='전공 및 계열 입력'
        name={'education'}
      />
      <SelectType
        label='어떤 취미를 가지고 있나요?'
        options={[
          '😍 전공이 적성에 잘 맞아요!',
          '😳 보통이에요 / 잘 모르겠어요.',
          '😰 전공이 적성과는 맞지 않아요.',
        ]}
        onSelect={handleMatchSelect}
        selected={userData.majorCheck}
        width='100%'
        style={{ textAlign: 'left' }}
      />
      <Button
        variant={isAllFieldsFilled ? 'primary' : 'primaryDisabled'}
        disabled={!isAllFieldsFilled}
        style={{
          position: 'fixed',
          bottom: '38px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {isAllFieldsFilled ? <Link to={ROUTES_PATH.experience}>계속하기</Link> : '계속하기'}
      </Button>
      <Modal
        label='학력선택'
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSelect={handleSelectOption}
        selected={userData.education}
        options={edu}
      />
    </EducationWrapper>
  );
};

const EducationWrapper = styled.div`
  position: relative;
  padding: 12px 0 100px;

  .title {
    margin-bottom: 46px;
  }
  .optionPickerBox {
    margin-bottom: 60px;
  }
  .space {
    margin-bottom: 60px;
  }
`;

const StyledTextInput = styled(TextInput)`
  width: 60%;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 8px;
`;
