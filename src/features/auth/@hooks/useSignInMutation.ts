import { useMutation } from '@tanstack/react-query';
import { authService } from 'features/auth/api/authService';
import { useNavigate } from 'react-router-dom';

export const useSignInMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authService.signIn,
    onSuccess: (data) => {
      if (data.data.loginMemberResponse && !data.data.loginMemberResponse.firstLogin) {
        navigate('/home');
      } else {
        navigate('/signupSuccess');
      }
    },
    onError: (error) => {
      console.error('실패', error);
    },
  });
};
