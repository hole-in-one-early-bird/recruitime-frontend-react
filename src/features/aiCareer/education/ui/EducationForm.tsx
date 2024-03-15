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
  const { userDataStore, handleSelect } = useUserData(initialValues);

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
    userDataStore.education !== '' && userDataStore.major !== '' && userDataStore.majorCheck !== '';

  return (
    <EducationWrapper>
      <div className='title'>
        <StyledTypography variant={'mainTitle02'}>학력과 적성을 체크할게요!</StyledTypography>
        <Typography variant={'subTitle02'} style={{ color: colors.gray[500] }}>
          전공 적성도를 체크하기 위한 과정이에요
        </Typography>
      </div>
      <div className='optionPickerBox'>
        <OptionPicker
          label='학력 선택'
          onClick={handleOpenModal}
          selectedOption={userDataStore.education}
          children='학력선택'
        />
      </div>
      <StyledTextInput
        className='space'
        type='text'
        label='전공/계열'
        value={userDataStore.major}
        onChange={handleEducationChange}
        placeholder='전공 및 계열 입력'
        name={'education'}
      />
      <SelectType
        label='전공/계열에 대한 생각은 어때요?'
        options={[
          '😍 전공이 적성에 잘 맞아요!',
          '😳 보통이에요 / 잘 모르겠어요.',
          '😰 전공이 적성과는 맞지 않아요.',
        ]}
        onSelect={handleMatchSelect}
        selected={userDataStore.majorCheck}
        width='100%'
        style={{ textAlign: 'left', fontWeight: userDataStore.majorCheck ? '500' : '400' }}
        TypographyVariant={'button03'}
      />

      {isAllFieldsFilled ? (
        <Link to={ROUTES_PATH.experience}>
          <Button
            variant={isAllFieldsFilled ? 'primary' : 'primaryDisabled'}
            disabled={!isAllFieldsFilled}
            style={{
              position: 'fixed',
              bottom: '38px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            TypographyVariant={'button01'}
          >
            계속하기
          </Button>
        </Link>
      ) : (
        '계속하기'
      )}

      <Modal
        label='학력선택'
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSelect={handleSelectOption}
        selected={userDataStore.education}
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
