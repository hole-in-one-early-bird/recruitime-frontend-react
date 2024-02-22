import { useHobby } from 'features/aiCareer/@hooks/useHobby';
import { useAge } from 'features/userInfo/@hooks/useAge';
import { useGender } from 'features/userInfo/@hooks/useGender';
import useName from 'features/userInfo/@hooks/useName';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { Button } from 'shared/ui/button/Button';
import { TextInput } from 'shared/ui/input/TextInput';
import { SelectType } from 'shared/ui/select/SelectButton';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const ProfileForm = () => {
  const [name, handleNicknameChange] = useName('');
  const { gender, handleGenderSelect } = useGender('');
  const { age, handleAgeSelect } = useAge('');
  const { hobby, handleHobbySelect } = useHobby('');
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);

  useEffect(() => {
    setIsAllFieldsFilled(name !== '' && gender !== '' && age !== '' && hobby !== '');
  }, [name, gender, age, hobby]);

  return (
    <ProfileWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>프로필을 입력해 주세요!</StyledTypography>
        <Typography variant={'subtitle3'}>맞춤 커리어 가이드를 위한 과정이에요</Typography>
      </div>
      <TextInput
        className='space'
        type='text'
        label='이름'
        value={name}
        onChange={handleNicknameChange}
        placeholder='이름 입력'
        name={'name'}
      />
      <SelectType
        className='space'
        label='성별'
        options={['남자', '여자']}
        onSelect={handleGenderSelect}
        selected={gender}
        width='49%'
      />
      <SelectType
        className='space'
        label='나이'
        options={['20대', '30대', '40대', '50대', '60대 이상']}
        onSelect={handleAgeSelect}
        selected={age}
        width='32%'
      />
      <SelectType
        label='어떤 취미를 가지고 있나요?'
        options={[
          '창작과 예술을 좋아해요.',
          '운동과 액티비티를 즐겨요.',
          '학습과 감상을 즐겨요.',
          '커뮤니티 활동을 좋아해요.',
        ]}
        onSelect={handleHobbySelect}
        selected={hobby}
        style={{ textAlign: 'left' }}
      />
      <Button
        variant={isAllFieldsFilled ? 'primary' : 'primaryDisabled'}
        disabled={!isAllFieldsFilled}
        style={{ marginTop: '24px' }}
      >
        <Link to={ROUTES_PATH.track}>계속하기</Link>
      </Button>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  .title {
    margin-bottom: 46px;
  }
  .space {
    margin-bottom: 60px;
  }
`;

const StyledTypography = styled(Typography)`
  margin: 18px 0 8px;
`;
