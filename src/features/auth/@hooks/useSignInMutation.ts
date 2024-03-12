import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../api/authService';

export const useSignInMutation = () => {
  const [loginResult, setLoginResult] = useState(true);
  const navigate = useNavigate();

  const signInMutation = useMutation({
    mutationFn: authService.signIn,
    onSuccess: (data) => {
      setLoginResult(true);

      if (data.data.loginMemberResponse && !data.data.loginMemberResponse.firstLogin) {
        navigate('/home');
      } else {
        navigate('/signupSuccess');
      }
    },
    onError: (error) => {
      setLoginResult(false);

      console.error('실패', error);
    },
  });

  return {
    signIn: signInMutation.mutate,
    loginResult,
  };
};
