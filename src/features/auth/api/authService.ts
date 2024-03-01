import axios from 'axios';
import { API } from 'config';

export interface SigninData {
  userEmail: string;
  password: string;
}

export interface SignupData {
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

export const authService = {
  signIn: async (userData: SigninData) => {
    const response = await axios.post(`${API.SIGNIN}`, userData);
    return response.data;
  },
  signUp: async (userData: SignupData) => {
    const { email, password } = userData;
    const dataToSend = { email, password };

    const response = await axios.post(`${API.SIGNUP}`, dataToSend);
    return response.data;
  },
  validation: async (userData: SignupData) => {
    const response = await axios.post(`${API.VALIDATION}`, userData.email);
    console.log(response, 'validation');
    return response.data;
  },
  findPassword: async (signedEmail: string) => {
    const response = await axios.get(`${API.PASSWORD_FIND}`, { params: { signedEmail } });
    console.log(response);
    return response.data;
  },
};
