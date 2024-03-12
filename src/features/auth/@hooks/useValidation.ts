import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { authService } from '../api/authService';

export const useValidation = () => {
  const [lastValidationResult, setLastValidationResult] = useState(false);

  return {
    ...useMutation({
      mutationFn: authService.validation,
      onSuccess: (data) => {
        setLastValidationResult(true);
        console.log(data);
      },
      onError: (error) => {
        setLastValidationResult(false);
        console.error('실패', error);
      },
    }),
    lastValidationResult,
  };
};
