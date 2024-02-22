import { Education } from 'features/userInfo/education/ui/Education';
import { Experience } from 'features/userInfo/experience/ui/Experience';
import { Profile } from 'features/userInfo/profile/ui/Profile';
import React, { useState } from 'react';
import { Modal } from 'shared/ui/modal/Modal';
import styled from 'styled-components';

export const UserInfo = () => {
  return (
    <UserInfoWrapper>
      <Profile />
      <Education /> {/* 함수를 prop으로 전달합니다. */}
      <Experience />
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div``;
