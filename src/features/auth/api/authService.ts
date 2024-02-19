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
    const response = await axios.post(`${API.SIGNUP}`, userData);
    return response.data;
  },
  validation: async (userData: SignupData) => {
    const response = await axios.post(`${API.VALIDATION}`, userData.email);
    console.log(response, 'validation');
    return response.data;
  },
};
