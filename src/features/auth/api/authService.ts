import axios from 'axios';
import { API } from 'config';

export interface UserData {
  email: string;
  password: string;
}

export const authService = {
  signIn: async (userData: UserData) => {
    const response = await axios.post(`${API.SIGNIN}`, userData);
    console.log(response, 'signIn');
    return response.data;
  },
  signUp: async (userData: UserData) => {
    const response = await axios.post(`${API.SIGNUP}`, userData);
    console.log(response, 'signIn');
    return response.data;
  },
};
