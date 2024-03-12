import { useMutation } from '@tanstack/react-query';
import { authService } from 'features/auth/api/authService';
import { useNavigate } from 'react-router-dom';

export const useProfileSaveMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authService.saveProfile,
    onSuccess: (data) => {
      navigate('/home', { state: { saveSuccess: true } });
    },
    onError: (error) => {
      console.error('프로필 저장 실패', error);
    },
  });
};
