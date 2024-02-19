import { useState } from 'react';

interface Errors {
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});

  const validate = (formValues: Errors) => {
    const errors: Partial<Errors> = {};

    // 이메일 필드 유효성 검사
    if (formValues.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = '이메일 형식이 유효하지 않습니다.';
    }

    // 비밀번호 필드 유효성 검사
    if (formValues.password && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,10}$/.test(formValues.password)) {
      errors.password = '비밀번호는 영문, 숫자가 포함된 1~10자여야 합니다.';
    }

    // 비밀번호 확인 필드 유효성 검사
    if (formValues.password !== formValues.passwordConfirm) {
      errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    }

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValues = { ...values, [name]: value };
    setValues(updatedValues);
    const validationErrors = validate(updatedValues);
    setErrors(validationErrors);
  };

  return { values, handleChange, errors };
};
