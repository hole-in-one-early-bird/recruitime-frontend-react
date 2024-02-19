import React, { useState } from 'react';
import TextInput from 'shared/ui/input/TextInput';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const Profile = () => {
  const [name, setName] = useState('');
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length > 5) {
      alert('5자 이하로 작성해주세요');
    } else {
      setName(input);
    }
  };

  return (
    <ProfileWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>개인 프로필 작성</StyledTypography>
        <Typography variant={'subtitle3'}>더 정확한 분석을 위해 프로필이 필요해요!</Typography>
      </div>
      <TextInput
        type='text'
        label='이름'
        value={name}
        onChange={handleNicknameChange}
        placeholder='이름 입력'
        name={'name'}
      />
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  .title {
    margin-bottom: 46px;
  }
`;
const StyledTypography = styled(Typography)`
  margin: 48px 0 8px;
`;
