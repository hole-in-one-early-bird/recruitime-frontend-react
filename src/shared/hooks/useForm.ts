import { useState } from 'react';

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return [values, handleChange];
};
