import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authService } from '../api/authService';

export const useFindEmailMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authService.findPassword,
    onSuccess: (data) => {
      console.log('이메일 찾기 성공', data);
    },
    onError: (error) => {
      console.error('이메일 찾기 실패', error);
    },
  });
};
