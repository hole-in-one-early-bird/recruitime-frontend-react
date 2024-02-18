import { useState } from 'react';

interface Errors {
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});

  const validate = (name: string, value: string) => {
    let tempErrors = { ...errors };
    if (name === 'email') {
      tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ''
        : '이메일 형식이 유효하지 않습니다.';
    }
    if (name === 'password') {
      tempErrors.password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,10}$/.test(value)
        ? ''
        : '비밀번호는 영문, 숫자가 포함된 1~10자여야 합니다.';
    }
    if (name === 'passwordConfirm') {
      tempErrors.passwordConfirm = values.password === value ? '' : '비밀번호가 일치하지 않습니다.';
    }
    setErrors({
      ...tempErrors,
    });
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
    validate(name, value); // 여기서 value는 항상 string 타입
  };

  return { values, handleChange, errors };
};
