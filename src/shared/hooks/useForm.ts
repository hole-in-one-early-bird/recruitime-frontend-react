import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API } from 'config';
import { useValidation } from 'features/auth/@hooks/useValidation';
import { authService, SignupData } from 'features/auth/api/authService';
import { useState } from 'react';

export const useForm = (initialValues: any, validationFields: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<SignupData>({});

  const checkDuplicates = async (email: string) => {
    try {
      const data = { email };
      const response = await axios.post(API.VALIDATION, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error: any) {
      console.log(error.response.status);
    }
  };

  const validate = async (formValues: SignupData, isLoginPage?: boolean) => {
    const errors: Partial<SignupData> = {};
    // 이메일 필드 유효성 검사
    if (validationFields.includes('email') && formValues.email) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
        errors.email = '이메일 형식이 유효하지 않습니다.';
      } else if (!isLoginPage) {
        // 회원가입 시에만 중복 여부 확인
        const isEmailDuplicate = await checkDuplicates(formValues.email);
        if (!isEmailDuplicate) {
          errors.email = '사용할 수 없는 이메일입니다.';
        }
      }
    }

    if (
      validationFields.includes('password') &&
      formValues.password &&
      !/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{1,10}$/.test(formValues.password)
    ) {
      errors.password = '비밀번호는 영문, 숫자가 포함된 1~10자여야 합니다.';
    }

    // 비밀번호 확인 필드 유효성 검사
    if (
      validationFields.includes('passwordConfirm') &&
      formValues.password !== formValues.passwordConfirm
    ) {
      errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    }

    return errors;
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>, isLoginPage?: boolean) => {
    const { name, value } = e.target;
    const updatedValues = { ...values, [name]: value };
    setValues(updatedValues);

    // 회원가입 시에만 중복 검사를 수행합니다.
    if (name === 'email') {
      // 유효성 검사가 완료될 때까지 기다립니다.
      const validationErrors = await validate(updatedValues, isLoginPage);
      setErrors(validationErrors);
    }
  };
  return { values, handleChange, errors };
};
