import axios from 'axios';
import { API } from 'config';

export interface SigninData {
  userEmail: string;
  password: string;
}
export interface SignupData {
  email: string;
  password: string;
}

export const authService = {
  signIn: async (userData: SigninData) => {
    const response = await axios.post(`${API.SIGNIN}`, userData);
    console.log(response, 'signIn');
    return response.data;
  },
  signUp: async (userData: SignupData) => {
    const response = await axios.post(`${API.SIGNUP}`, userData);
    console.log(response, 'signIn');
    return response.data;
  },
};
