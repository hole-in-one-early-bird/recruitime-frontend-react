import { useUserData } from 'features/aiCareer/@hooks/useUserData';
import { useProfileSaveMutation } from 'features/auth/@hooks/useProfileSaveMutation';

import { Education } from 'features/userInfo/education/ui/Education';
import { Experience } from 'features/userInfo/experience/ui/Experience';
import { Profile } from 'features/userInfo/profile/ui/Profile';
import React from 'react';
import { initialValues } from 'shared/constants/data';
import { Button } from 'shared/ui/button/Button';

import styled from 'styled-components';

export const UserInfo = () => {
  const { mutate: saveProfile } = useProfileSaveMutation();
  const { userDataStore } = useUserData(initialValues);

  const isAllDataComplete = () => {
    return (
      userDataStore.name !== '' &&
      userDataStore.gender !== '' &&
      userDataStore.age !== '' &&
      userDataStore.major !== '' &&
      userDataStore.experiences.length >= 0
    );
  };

  return (
    <UserInfoWrapper>
      <Profile />
      <Education />
      <Experience />
      <Button
        type='submit'
        variant={isAllDataComplete() ? 'primary' : 'primaryDisabled'}
        onClick={() => isAllDataComplete() && saveProfile(userDataStore)}
        disabled={!isAllDataComplete()}
        TypographyVariant={'button01'}
      >
        프로필 저장하기
      </Button>
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div``;
