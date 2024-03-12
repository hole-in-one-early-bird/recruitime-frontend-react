import axios from 'axios';
import { API } from 'config';
import { useProfileSaveMutation } from 'features/auth/@hooks/useProfileSaveMutation';
import { getAuthTokenFromCookie } from 'features/auth/api/authService';

import { useUserInfoData } from 'features/userInfo/@hooks/useUserInfoData';
import { Education } from 'features/userInfo/education/ui/Education';
import { Experience } from 'features/userInfo/experience/ui/Experience';
import { Profile } from 'features/userInfo/profile/ui/Profile';
import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/button/Button';

import styled from 'styled-components';

export const UserInfo = () => {
  const { userInfoData, handlers } = useUserInfoData('');
  const { mutate: saveProfile } = useProfileSaveMutation();

  const isAllDataComplete = () => {
    return (
      userInfoData.name !== '' &&
      userInfoData.gender !== '' &&
      userInfoData.age !== '' &&
      userInfoData.highestDegree !== '' &&
      userInfoData.major !== '' &&
      userInfoData.experiences.length >= 0
    );
  };

  return (
    <UserInfoWrapper>
      <Profile userInfoData={userInfoData} handlers={handlers} />
      <Education userInfoData={userInfoData} handlers={handlers} />
      <Experience userInfoData={userInfoData} handlers={handlers} />
      <Button
        type='submit'
        variant={isAllDataComplete() ? 'primary' : 'primaryDisabled'}
        onClick={() => isAllDataComplete() && saveProfile(userInfoData)}
        disabled={!isAllDataComplete()}
      >
        프로필 저장하기
      </Button>
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div``;
