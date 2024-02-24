import React, { useEffect, useState } from 'react';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';
import { Button } from 'shared/ui/button/Button';
import { interestAreas } from 'shared/constants/data';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';

const MAX_SELECTIONS = 3;

export const TrackForm = () => {
  const [selectedInterests, setSelectedInterests] = useState<number[]>([]);
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);

  useEffect(() => {
    setIsAllFieldsFilled(selectedInterests.length > 0);
  }, [selectedInterests]);

  const handleSelectInterest = (interestId: number) => {
    setSelectedInterests((currentSelectedInterests) => {
      if (currentSelectedInterests.includes(interestId)) {
        return currentSelectedInterests.filter((id) => id !== interestId);
      } else if (currentSelectedInterests.length < MAX_SELECTIONS) {
        return [...currentSelectedInterests, interestId];
      }
      return currentSelectedInterests;
    });
  };

  return (
    <TrackWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>흥미 분야를 선택해 주세요!</StyledTypography>
        <div className='count'>
          <Typography variant={'subtitle3'}>세부 관심 분야를 파악하기 위한 과정이에요</Typography>
          <Typography variant={'count1'}>{`(${selectedInterests.length}/${MAX_SELECTIONS})`}</Typography>
        </div>
      </div>
      <InterestsContainer>
        {interestAreas.map((interest) => (
          <StyledButton
            variant={selectedInterests.includes(interest.id) ? 'active' : 'inactive'}
            key={interest.id}
            onClick={() => handleSelectInterest(interest.id)}
          >
            <Typography variant={selectedInterests.includes(interest.id) ? 'button3Active' : 'button3'}>
              {interest.name}
            </Typography>
          </StyledButton>
        ))}
      </InterestsContainer>
      <Button
        variant={isAllFieldsFilled ? 'primary' : 'primaryDisabled'}
        disabled={!isAllFieldsFilled}
        style={{
          position: 'fixed',
          bottom: '38px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Link to={ROUTES_PATH.education}>계속하기</Link>
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