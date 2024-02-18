import { useSignInMutation } from 'features/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { useForm } from 'shared/hooks/useForm';
import colors from 'shared/styles/color';
import { common } from 'shared/styles/common';
import { Button } from 'shared/ui/button/Button';
import TextInput from 'shared/ui/input/TextInput';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

const mockData = {
  userEmail: 'asdf@naver.com',
  password: 'juhee123',
};
export const SigninForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const { mutate: signIn } = useSignInMutation();

  const [values, handleChange] = useForm(initialValues);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signIn(mockData);
  };

  return (
    <SigninFormWrapper>
      <Typography className='title' variant={'largeTitle'}>
        로그인
      </Typography>
      <TextInput
        label='이메일'
        type='text'
        name='username'
        value={values.username}
        onChange={handleChange}
        placeholder={'이메일을 입력해주세요'}
      />
      <TextInput
        label='비밀번호'
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
        placeholder={'영문, 숫자가 포함된 1~10자'}
        style={{ marginBottom: '60px' }}
      />

      <AuthOptions>
        <Link to={ROUTES_PATH.signup}>
          <Typography variant={'caption'} className='option'>
            회원가입
          </Typography>
        </Link>
        <Link to={ROUTES_PATH.findAccount}>
          <Typography variant={'caption'} className='option'>
            계정 찾기
          </Typography>
        </Link>
      </AuthOptions>
    </SigninFormWrapper>
  );
};

const SigninFormWrapper = styled.div`
  .title {
    margin-bottom: 66px;
  }
`;

const AuthOptions = styled.div`
  ${common.flexCenterRow}
  gap: 28px;
  .option {
    padding: 2px;
    border-bottom: 1px solid ${colors.gray[400]};
  }
`;
