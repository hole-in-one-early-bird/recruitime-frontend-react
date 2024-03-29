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
  const { userDataStore, handleSelect, addExperience, removeExperience } = useUserData(initialValues);

  const handleSelectOption = (option: string) => {
    handleSelect('experienceOption', option);
    handleCloseModal();
  };

  const handleExperienceChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSelect('experienceDetail', e.target.value);
  };

  return (
    <ExperienceWrapper>
      <div className='title'>
        <StyledTypography variant={'mainTitle02'}>경험을 입력해 주세요!</StyledTypography>
        <Typography variant={'subTitle02'} style={{ color: colors.gray[500] }}>
          다양한 활동 경험들을 간단히 입력해 주세요
        </Typography>
      </div>
      <div className='optionPickerBox'>
        <OptionPicker
          onClick={handleOpenModal}
          selectedOption={userDataStore.experienceOption}
          children='경험선택'
        />
      </div>
      <AddExperienceWrapper>
        <StyledTextInput
          type='text'
          value={userDataStore.experienceDetail}
          onChange={handleExperienceChange}
          placeholder='경험 내용 입력'
          name={'experienceDetail'}
          caption='최대 15자까지 입력할 수 있어요.'
          maxLength={15}
        />
        <StyledButton
          variant={
            !userDataStore.experienceOption ||
            !userDataStore.experienceDetail ||
            userDataStore.experiences.length >= 5
              ? 'inactive'
              : 'confirm'
          }
          TypographyVariant={'button02'}
          onClick={() => {
            if (
              userDataStore.experienceOption &&
              userDataStore.experienceDetail &&
              userDataStore.experiences.length < 5
            ) {
              addExperience(userDataStore.experienceOption, userDataStore.experienceDetail);
              handleSelect('experienceOption', '');
              handleSelect('experienceDetail', '');
            }
          }}
        >
          입력하기
        </StyledButton>
      </AddExperienceWrapper>
      {userDataStore.experiences.length === 0 ? (
        <EmptyBox>
          <img src={process.env.PUBLIC_URL + '/images/char/listRecruitime.svg'} alt='characterImage' />
          <Typography variant={'caption04'} style={{ color: colors.gray[400] }}>
            5개까지만 알려주세요
          </Typography>
        </EmptyBox>
      ) : (
        <ListBox>
          {userDataStore.experiences.map((e, index) => (
            <ExperienceItem key={index}>
              <Typography variant={'subTitle01'} style={{ color: colors.gray[800] }}>
                {e.activity}
              </Typography>
              <Typography variant={'subTitle02'} style={{ color: colors.gray[700] }}>
                {e.content}
              </Typography>
              <img
                onClick={() => removeExperience(index)}
                src={process.env.PUBLIC_URL + '/images/icon/closeIcon.svg'}
                alt='closeIcon'
              />
            </ExperienceItem>
          ))}
        </ListBox>
      )}

      <Link to={ROUTES_PATH.keyword}>
        <StyledButton
          variant={'primary'}
          style={{
            position: 'fixed',
            bottom: '38px',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '440px',
            width: 'calc(100% - 40px)',
          }}
          TypographyVariant={'button01'}
        >
          계속하기
        </StyledButton>
      </Link>
      <Modal
        label='경험선택'
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSelect={handleSelectOption}
        selected={userDataStore.experienceOption}
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
