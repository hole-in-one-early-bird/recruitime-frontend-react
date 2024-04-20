import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { authService } from '../api/authService';

export const useFindEmailMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authService.findPassword,
    onSuccess: (data) => {
      console.log('이메일 찾기 성공', data);
      navigate(ROUTES_PATH.signin);
    },
    onError: (error) => {
      console.error('이메일 찾기 실패', error);
    },
  });
};
