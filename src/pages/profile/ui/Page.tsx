import { ProfileForm } from 'features/aiCareer/profile/ui/ProfileForm';
import React from 'react';
import styled from 'styled-components';

export const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileForm />
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div``;
