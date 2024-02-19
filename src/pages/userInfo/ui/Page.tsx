import { Profile } from 'features/userInfo/profile/ui/Profile';
import React from 'react';
import styled from 'styled-components';

export const UserInfo = () => {
  return (
    <UserInfoWrapper>
      <Profile />
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div``;
