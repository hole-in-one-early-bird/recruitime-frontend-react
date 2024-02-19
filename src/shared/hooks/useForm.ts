import { SignupData } from 'features/auth/api/authService';
import { useEffect, useState } from 'react';

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<SignupData>({});
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (values.email) {
        setIsCheckingEmail(true);
        // 이메일 중복 검사 API 호출
        fetch('http://example.com/users/check_duplicate_email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: values.email }),
        })
          .then((response) => response.json())
          .then((data) => {
            setIsCheckingEmail(false);
            if (data.isDuplicate) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                email: '이 이메일은 이미 사용 중입니다.',
              }));
            } else {
              setErrors((prevErrors) => ({
                ...prevErrors,
                email: '',
              }));
            }
          })
          .catch((error) => {
            setIsCheckingEmail(false);
            console.error('Error:', error);
          });
      }
    }, 500); // 500ms 디바운싱 시간

    return () => clearTimeout(timeoutId); // cleanup 함수
  }, [values.email]);

  const validate = (formValues: SignupData) => {
    const errors: Partial<SignupData> = {};

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

  return { values, handleChange, errors, isCheckingEmail };
};
