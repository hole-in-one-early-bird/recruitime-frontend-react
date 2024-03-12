import { UserInfoData, useUserInfoData } from 'features/userInfo/@hooks/useUserInfoData';
import React from 'react';
import colors from 'shared/styles/color';
import { TextInput } from 'shared/ui/input/TextInput';
import { SelectType } from 'shared/ui/select/SelectButton';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';
// Profile.tsx
interface ProfileProps {
  userInfoData: {
    name: string;
    gender: string;
    age: string;
  };
  handlers: {
    handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAgeSelect: (selected: string) => void;
    handleGenderSelect: (selected: string) => void;
  };
}

export const Profile: React.FC<ProfileProps> = ({ userInfoData, handlers }) => {
  const { name, gender, age } = userInfoData;
  const { handleNameChange, handleAgeSelect, handleGenderSelect } = handlers;

  return (
    <ProfileWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>개인 프로필 작성</StyledTypography>
        <Typography variant={'headline2'} style={{ color: colors.gray[500] }}>
          더 정확한 분석을 위해 프로필이 필요해요!
        </Typography>
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
        onSelect={handleGenderSelect}
        selected={gender}
        width='49%'
      />
      <SelectType
        label='나이'
        options={['20대', '30대', '40대', '50대', '60대 이상']}
        onSelect={handleAgeSelect}
        selected={age}
        width='32%'
      />
    </ProfileWrapper>
  );
};
const ProfileWrapper = styled.div`
  padding: 30px 0;
  border-bottom: 2px solid ${colors.gray[200]};
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
