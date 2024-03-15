import { useUserData } from 'features/aiCareer/@hooks/useUserData';
import { useModal } from 'features/userInfo/@hooks/useModal';
import React, { ChangeEvent } from 'react';
import { edu, initialValues } from 'shared/constants/data';
import colors from 'shared/styles/color';
import { TextInput } from 'shared/ui/input/TextInput';
import { Modal } from 'shared/ui/modal/Modal';
import { OptionPicker } from 'shared/ui/select/OptionPicker';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const Education = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { userDataStore, handleSelect } = useUserData(initialValues);

  const handleEducationChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSelect('major', e.target.value);
  };

  const handleSelectOption = (option: string) => {
    handleSelect('education', option);
    handleCloseModal();
  };

  return (
    <EducationWrapper>
      <div className='title'>
        <StyledTypography variant={'mainTitle02'} style={{ color: colors.gray[900] }}>
          학력 정보
        </StyledTypography>
        <Typography variant={'subTitle02'} style={{ color: colors.gray[500] }}>
          더 정확한 분석을 위해 프로필이 필요해요!
        </Typography>
      </div>
      <div className='optionPickerBox'>
        <OptionPicker
          label='최종학력'
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
