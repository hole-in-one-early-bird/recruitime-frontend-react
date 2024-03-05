import axios from 'axios';
import { API } from 'config';

export interface SigninData {
  email: string;
  password: string;
}

export interface SignupData {
  userEmail?: string;
  password?: string;
  passwordConfirm?: string;
}

export const authService = {
  signIn: async (userData: SigninData) => {
    const response = await axios.post(`${API.SIGNIN}`, userData);
    return response.data;
  },
  signUp: async (userData: SignupData) => {
    const { userEmail, password } = userData;
    const dataToSend = { userEmail, password };
    console.log(dataToSend);
    const response = await axios.post(`${API.SIGNUP}`, dataToSend);
    return response.data;
  },
  validation: async (userData: SignupData) => {
    console.log(userData, 'userEmail');
    const response = await axios.post(`${API.VALIDATION}`, userData.userEmail);
    console.log(response, 'validation');
    return response.data;
  },
};
