import axios from 'axios';
import { API } from 'config';

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

    const response = await axios.post(`${API.VALIDATION}`, formData);
    return response.data;
  },
  findPassword: async (signedEmail: string) => {
    const response = await axios.get(`${API.PASSWORD_FIND}`, { params: { signedEmail } });
    console.log(response);
    return response.data;
  },
};
