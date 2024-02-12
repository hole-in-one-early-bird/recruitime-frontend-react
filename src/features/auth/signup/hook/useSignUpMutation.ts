import { useMutation } from '@tanstack/react-query';
import { authService, SignUpResponse, UserData } from 'features/auth/api/authService';
import { useNavigate } from 'react-router-dom';

export const useSignUpMutation = () => {
  const navigate = useNavigate();
  return useMutation<SignUpResponse, Error, UserData>({
    mutationFn: authService.signUp,
    onSuccess: (data) => {
      console.log('성공', data);
      navigate('/signIn');
    },
    onError: (error) => {
      console.error('실패', error);
    },
  });
};
