import axios from 'axios';
import { API } from 'config';
import { useUserData } from 'features/aiCareer/@hooks/useUserData';
import { useProfileEditMutation } from 'features/auth/@hooks/useProfileEditMutation';
import { useProfileSaveMutation } from 'features/auth/@hooks/useProfileSaveMutation';

import { getAuthTokenFromCookie } from 'features/auth/api/authService';

import { useUserInfoData } from 'features/userInfo/@hooks/useUserInfoData';
import { Education } from 'features/userInfo/education/ui/Education';
import { Experience } from 'features/userInfo/experience/ui/Experience';
import { Profile } from 'features/userInfo/profile/ui/Profile';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initialValues } from 'shared/constants/data';
import { ROUTES_PATH } from 'shared/constants/routes';
import { Button } from 'shared/ui/button/Button';
import { UserDataType, useUserStore } from 'shared/zustand/userStore';

import styled from 'styled-components';

export const EditUserInfo = () => {
  const { mutate: editProfile } = useProfileEditMutation();
  const { userDataStore } = useUserData(initialValues);
  const { setUserDataStore } = useUserStore();
  const navigate = useNavigate();
  const getProfileData = async () => {
    try {
      const token = getAuthTokenFromCookie();
      const response = await axios.get(`${API.GETPROFILE}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const profileData = response.data.data;

      const mappedData: Partial<UserDataType> = {
        name: profileData.name,
        gender: profileData.gender,
        age: profileData.age,
        education: profileData.highestDegree,
        major: profileData.major,
        experiences: profileData.experiences.map((exp: { activity: any; content: any }) => ({
          activity: exp.activity,
          content: exp.content,
        })),
      };

      setUserDataStore(mappedData);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getProfileData().catch((error) => {
      if (error.response && error.response.status === 404) {
      } else {
        console.error('오류 발생:', error.message);
      }
    });
  }, []);

  return (
    <UserInfoWrapper>
      <Profile />
      <Education />
      <Experience />
      <Button
        type='submit'
        TypographyVariant={'button01'}
        variant={'primary'}
        onClick={() => editProfile(userDataStore)}
      >
        프로필 저장하기
      </Button>
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div``;
