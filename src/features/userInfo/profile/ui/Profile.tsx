import { useUserData } from 'features/aiCareer/@hooks/useUserData';
import { UserInfoData, useUserInfoData } from 'features/userInfo/@hooks/useUserInfoData';
import React from 'react';
import { initialValues } from 'shared/constants/data';
import colors from 'shared/styles/color';
import { TextInput } from 'shared/ui/input/TextInput';
import { SelectType } from 'shared/ui/select/SelectButton';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const Profile = () => {
  const { userDataStore, handleNameChange, handleSelect } = useUserData(initialValues);
  const { name, gender, age } = userDataStore;

  return (
    <ProfileWrapper>
      <div className='title'>
        <StyledTypography variant={'mainTitle02'} style={{ color: colors.gray[900] }}>
          개인 프로필 작성
        </StyledTypography>
        <Typography variant={'subTitle02'} style={{ color: colors.gray[500] }}>
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
        onSelect={handleSelect.bind(null, 'gender')}
        selected={gender}
        width='49%'
        TypographyVariant={'button02'}
      />
      <SelectType
        label='나이'
        options={['20대', '30대', '40대', '50대', '60대 이상']}
        onSelect={handleSelect.bind(null, 'age')}
        selected={age}
        width='32%'
        TypographyVariant={'button02'}
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
