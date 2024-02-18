import { useSignUpMutation } from 'features/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { useForm } from 'shared/hooks/useForm';
import { Button } from 'shared/ui/button/Button';
import TextInput from 'shared/ui/input/TextInput';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';
const mockData = {
  email: 'asdf@naver.com',
  password: 'juhee123',
};
export const FindAccount = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const { mutate: signUp } = useSignUpMutation();
  const { values, handleChange, errors } = useForm(initialValues);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signUp(mockData);
  };
  return (
    <FindAccountWrapper>
      <StyledTypography className='title' variant={'largeTitle'}>
        {`가입하신 이메일 주소를\n입력해주세요`}
      </StyledTypography>
      <TextInput
        label='이메일'
        type='text'
        name='username'
        value={values.username}
        onChange={handleChange}
        placeholder={'이메일을 입력해주세요'}
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
