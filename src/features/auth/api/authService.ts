import axios from 'axios';
import { API } from 'config';
import { useUserStore } from 'shared/zustand/userStore';

export interface SigninData {
  email: string;
  password: string;
}

export interface SignupData {
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

export const setAccessTokenCookie = (accessToken: any) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7);

  document.cookie = `accessToken=${accessToken}; expires=${expirationDate.toUTCString()}; path=/`;
};

export const getAuthTokenFromCookie = () => {
  const cookies = document.cookie.split(';');
  const tokenCookie = cookies.find((cookie) => cookie.trim().startsWith('accessToken='));

  if (tokenCookie) {
    return tokenCookie.split('=')[1];
  }

  return null;
};

export function getCookie(key: string) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.split('=').map((part) => part.trim());
    if (cookieKey === key) {
      return cookieValue;
    }
  }
  return null;
}

export const authService = {
  signIn: async (userData: SigninData) => {
    const response = await axios.post(`${API.SIGNIN}`, userData);
    const { accessToken } = response.data.data;
    setAccessTokenCookie(accessToken);
    return response.data;
  },
  signUp: async (userData: SignupData) => {
    const { email, password } = userData;
    const dataToSend = { email, password };

    const response = await axios.post(`${API.SIGNUP}`, dataToSend);
    return response.data;
  },
  validation: async (email: string) => {
    const formData = new FormData();
    formData.append('email', email);
    const response = await axios.post(`${API.VALIDATION}`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  },
  findPassword: async (signedEmail: string) => {
    const data = { signedEmail: signedEmail };

    const response = await axios.post(API.PASSWORD_FIND, data);

    return response.data;
  },
  saveProfile: async (userInfoData: any) => {
    const token = getAuthTokenFromCookie();
    const transformedData = {
      name: userInfoData.name,
      gender: userInfoData.gender,
      age: userInfoData.age,
      highestDegree: userInfoData.education,
      major: userInfoData.major,
      experiences: userInfoData.experiences,
    };
    try {
      const response = await axios.post(API.USERINFO, transformedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  },
  editProfile: async (userInfoData: any) => {
    const token = getAuthTokenFromCookie();
    const transformedData = {
      name: userInfoData.name,
      gender: userInfoData.gender,
      age: userInfoData.age,
      highestDegree: userInfoData.education,
      major: userInfoData.major,
      experiences: userInfoData.experiences,
    };
    try {
      const response = await axios.put(API.USERINFO, transformedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  },
};
