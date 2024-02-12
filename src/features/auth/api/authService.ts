import axios from 'axios';
import { API } from 'config';
import React from 'react';
export interface UserData {
  email: string;
  password: string;
}
export interface SignUpResponse {
  success: true;
  data: 'data';
}
export const authService = {
  signIn: async (userData: UserData): Promise<UserData> => {
    const response = await axios.post(`${API.SIGNIN}`, userData);
    console.log(response, 'signIn');
    return response.data;
  },
  signUp: async (userData: UserData): Promise<SignUpResponse> => {
    const response = await axios.post(`${API.SIGNUP}`, userData);
    console.log(response, 'signIn');
    return response.data;
  },
};
