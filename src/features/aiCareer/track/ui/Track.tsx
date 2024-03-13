import React, { useEffect, useState } from 'react';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';
import { Button } from 'shared/ui/button/Button';
import { initialValues, interestAreas } from 'shared/constants/data';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { MAX_SELECTIONS, removeEmoji, useUserData } from 'features/aiCareer/@hooks/useUserData';
import colors from 'shared/styles/color';

export const TrackForm = () => {
  const { userDataStore, handleSelectInterest, handleSelect } = useUserData(initialValues);

  const selectedInterests = userDataStore.interests;

  // userData가 변경될 때마다 세션 스토리지를 업데이트합니다.

  return (
    <TrackWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>흥미 분야를 선택해 주세요!</StyledTypography>
        <div className='count'>
          <Typography variant={'headline2'} style={{ color: colors.gray[500] }}>
            세부 관심 분야를 파악하기 위한 과정이에요
          </Typography>
          <Typography variant={'count1'}>{`(${selectedInterests.length}/${MAX_SELECTIONS})`}</Typography>
        </div>
      </div>
      <InterestsContainer>
        {interestAreas.map((interest) => (
          <StyledButton
            variant={selectedInterests.includes(removeEmoji(interest.name)) ? 'active' : 'inactive'}
            key={interest.id}
            style={{ padding: '10px 16px' }}
            onClick={() => handleSelectInterest(interest.id)}
          >
            <Typography variant={selectedInterests.includes(interest.name) ? 'active' : 'inactive'}>
              {interest.name}
            </Typography>
          </StyledButton>
        ))}
      </InterestsContainer>
      <Button
        variant={selectedInterests.length > 0 ? 'primary' : 'primaryDisabled'}
        disabled={!selectedInterests}
        style={{
          position: 'fixed',
          bottom: '38px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {selectedInterests.length > 0 ? <Link to={ROUTES_PATH.education}>계속하기</Link> : '계속하기'}
      </Button>
    </TrackWrapper>
  );
};

const TrackWrapper = styled.div`
  position: relative;
  padding: 12px 0 100px;

  .title {
    margin-bottom: 46px;
  }
  .count {
    display: flex;
    gap: 18px;
  }
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 8px;
`;

const InterestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledButton = styled(Button)``;
