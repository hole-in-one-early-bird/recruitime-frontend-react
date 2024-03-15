import { useMutation } from '@tanstack/react-query';
import { authService } from 'features/auth/api/authService';
import { useNavigate } from 'react-router-dom';

export const useProfileEditMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authService.editProfile,
    onSuccess: (data) => {
      navigate('/mypage', { state: { saveSuccess: true } });
    },
    onError: (error) => {
      console.error('프로필 수정 실패', error);
    },
  });
};
