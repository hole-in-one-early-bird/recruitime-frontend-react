import { useMutation } from '@tanstack/react-query';
import { authService } from 'features/auth/api/authService';
import { useNavigate } from 'react-router-dom';

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
