import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { authService } from '../api/authService';

export const useValidation = () => {
  return {
    ...useMutation({
      mutationFn: authService.validation,
      onSuccess: (data) => {
        console.log(data, '사용할 수 있음');
      },
      onError: (error) => {
        console.log('사용할 수 없음');
        console.error('실패', error);
      },
    }),
  };
};
