import { useFindEmailMutation } from 'features/auth/@hooks/useFindEmailMutation';
import React, { useState } from 'react';

import { useForm } from 'shared/hooks/useForm';
import { Button } from 'shared/ui/button/Button';
import { TextInput } from 'shared/ui/input/TextInput';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const FindAccount = () => {
  const initialValues = {
    email: '',
  };
  const [isPage, setisPage] = useState(true);
  const { mutate: findPassword } = useFindEmailMutation();
  const { values, handleChange, errors } = useForm(initialValues, ['email']);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    findPassword(values.email);
  };

  const isEmailMatch = values.email !== '';
  const isFormValid =
    Object.values(values).every((value) => (value as string).trim() !== '') &&
    Object.values(errors).every((error) => !error);

  return (
    <FindAccountWrapper>
      <StyledTypography className='title' variant={'mainTitle01'}>
        {`가입하신 이메일 주소를\n입력해주세요`}
      </StyledTypography>
      <TextInput
        label='이메일'
        type='text'
        name='email'
        value={values.email}
        onChange={(e) => handleChange(e, true)}
        placeholder={'이메일을 입력해주세요'}
        error={errors.email}
      />

      <Button
        TypographyVariant='content'
        onClick={handleSubmit}
        variant={isFormValid ? 'primary' : 'primaryDisabled'}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          maxWidth: 'calc(100% - 40px)',
        }}
      >
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
  margin: 15px 0 66px;
`;
