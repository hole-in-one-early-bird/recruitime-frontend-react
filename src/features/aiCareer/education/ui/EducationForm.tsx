import { useHobby } from 'features/aiCareer/@hooks/useHobby';
import { useAge } from 'features/userInfo/@hooks/useAge';
import { useGender } from 'features/userInfo/@hooks/useGender';
import useName from 'features/userInfo/@hooks/useName';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { Button } from 'shared/ui/button/Button';
import { TextInput } from 'shared/ui/input/TextInput';
import { SelectType } from 'shared/ui/select/SelectButton';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const EducationForm = () => {
  return (
    <ProfileWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>학력과 적성을 체크할게요!</StyledTypography>
        <Typography variant={'subtitle3'}>전공 적성도를 체크하기 위한 과정이에요</Typography>
      </div>

      <Button variant={'primary'} style={{ marginTop: '24px' }}>
        <Link to={ROUTES_PATH.track}>계속하기</Link>
      </Button>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  .title {
    margin-bottom: 46px;
  }
  .space {
    margin-bottom: 60px;
  }
`;

const StyledTypography = styled(Typography)`
  margin: 18px 0 8px;
`;
