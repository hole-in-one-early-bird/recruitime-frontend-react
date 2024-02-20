import { Education } from 'features/userInfo/education/ui/Education';
import { Experience } from 'features/userInfo/experience/ui/Experience';
import { Profile } from 'features/userInfo/profile/ui/Profile';
import React from 'react';
import styled from 'styled-components';

export const UserInfo = () => {
  return (
    <UserInfoWrapper>
      <Profile />
      <Education />
      <Experience />
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div``;
