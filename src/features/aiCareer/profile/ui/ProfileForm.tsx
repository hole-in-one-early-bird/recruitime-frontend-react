import { useUserData } from 'features/aiCareer/@hooks/useUserData';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initialValues } from 'shared/constants/data';
import { ROUTES_PATH } from 'shared/constants/routes';
import { Button } from 'shared/ui/button/Button';
import { TextInput } from 'shared/ui/input/TextInput';
import { SelectType } from 'shared/ui/select/SelectButton';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const ProfileForm = () => {
  const {
    userData,
    handleNameChange,
    handleSelect,
    handleSelectInterest,
    addExperience,
    removeExperience,
  } = useUserData(initialValues);
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);

  const { name, gender, age, aboutMe } = userData;

  useEffect(() => {
    setIsAllFieldsFilled(name !== '' && gender !== '' && age !== '' && aboutMe !== ''); // 'age'의 비교를 수정하고, 'aboutMe'를 추가합니다.
  }, [name, gender, age, aboutMe]);
  useEffect(() => {
    sessionStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);
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
        onChange={handleNameChange}
        placeholder='이름 입력'
        name={'name'}
      />
      <SelectType
        className='space'
        label='성별'
        options={['남자', '여자']}
        onSelect={handleSelect.bind(null, 'gender')}
        selected={gender}
        width='49%'
      />
      <SelectType
        className='space'
        label='나이'
        options={['20대', '30대', '40대', '50대', '60대 이상']}
        onSelect={handleSelect.bind(null, 'age')}
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
        onSelect={handleSelect.bind(null, 'aboutMe')}
        selected={aboutMe}
        style={{ textAlign: 'left' }}
        width='100%'
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
        {isAllFieldsFilled ? <Link to={ROUTES_PATH.track}>계속하기</Link> : '계속하기'}
      </Button>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  padding-bottom: 100px;
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

const NextButton = styled(Button)`
  position: fixed;
  bottom: 38px;
  left: 50%;
  transform: translateX(-50%);
`;
