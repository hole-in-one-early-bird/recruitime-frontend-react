import { useMutation } from '@tanstack/react-query';
import { authService } from 'features/auth/api/authService';

export const useValidation = () => {
  return useMutation({
    mutationFn: authService.validation,
    onSuccess: (data) => {
      console.log('성공', data);
    },
    onError: (error) => {
      console.error('실패', error);
    },
  });
};
