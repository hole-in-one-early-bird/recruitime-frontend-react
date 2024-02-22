import { useMatch } from 'features/aiCareer/@hooks/useMatch';
import { useEducation } from 'features/userInfo/@hooks/useEducation';
import { useModal } from 'features/userInfo/@hooks/useModal';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { activities } from 'shared/constants/data';
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
  const { education, handleEducationChange } = useEducation('');
  const { match, handleMatchSelect } = useMatch('');
  const [selectedOption, setSelectedOption] = useState('');
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    handleCloseModal();
  };

  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);
  useEffect(() => {
    setIsAllFieldsFilled(true);
  }, []);

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
        className='space'
        type='text'
        label='전공/계열'
        value={education}
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
        selected={match}
        style={{ textAlign: 'left' }}
      />
      <Button
        variant={isAllFieldsFilled ? 'primary' : 'primaryDisabled'}
        disabled={!isAllFieldsFilled}
        style={{ marginTop: '24px' }}
      >
        <Link to={ROUTES_PATH.track}>계속하기</Link>
      </Button>
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