import { useSignUpMutation } from 'features/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { useForm } from 'shared/hooks/useForm';
import { Button } from 'shared/ui/button/Button';
import TextInput from 'shared/ui/input/TextInput';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const FindAccount = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const { mutate: signUp } = useSignUpMutation();
  const { values, handleChange, errors } = useForm(initialValues);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signUp(values);
  };
  return (
    <FindAccountWrapper>
      <StyledTypography className='title' variant={'largeTitle'}>
        {`가입하신 이메일 주소를\n입력해주세요`}
      </StyledTypography>
      <TextInput
        label='이메일'
        type='text'
        name='email'
        value={values.email}
        onChange={handleChange}
        placeholder={'이메일을 입력해주세요'}
        error={errors.email}
        isValid={!errors.email && values.email !== ''}
      />

      <Button onClick={handleSubmit} variant={'primary'} style={{ position: 'fixed', bottom: '65px' }}>
        비밀번호 발송
      </Button>
    </FindAccountWrapper>
  );
};

const FindAccountWrapper = styled.div`
  .title {
    margin-bottom: 66px;
  }
`;

const StyledTypography = styled(Typography)`
  white-space: pre-wrap;
  margin-bottom: 66px;
`;
