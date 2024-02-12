import axios from 'axios';
import { API } from 'config';
import React from 'react';

export const signUp = async (userData) => {
  const response = await axios.post(`${API.SIGNUP}`);
};
