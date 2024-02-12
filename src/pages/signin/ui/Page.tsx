import { SigninForm } from 'features/auth';
import React from 'react';
import { Typography } from 'shared/ui/typography/Typography';

export const SigninPage = () => {
  return (
    <div>
      <Typography variant={'count1'} children={'test'} />
      <SigninForm />
    </div>
  );
};
