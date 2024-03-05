import React, { useEffect, useState } from 'react';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';
import { Button } from 'shared/ui/button/Button';
import { interestAreas } from 'shared/constants/data';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import colors from 'shared/styles/color';

const MIN_SELECTIONS_REQUIRED = 10;
const MAX_SELECTIONS = 20;

export const KeywordForm = () => {
  const [selectedKeywords, setSelectedKeywords] = useState<number[]>([]);
  const [noticeText, setNoticeText] = useState(`10개 이상 선택해주세요! (0/${MAX_SELECTIONS})`);
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);

  useEffect(() => {
    setIsAllFieldsFilled(selectedKeywords.length > 9);
  }, [selectedKeywords]);
  useEffect(() => {
    if (selectedKeywords.length >= MIN_SELECTIONS_REQUIRED) {
      setNoticeText(
        `더 많은 키워드로 정확한 분석을 받아보세요! (${selectedKeywords.length}/${MAX_SELECTIONS})`
      );
    } else {
      setNoticeText(`10개 이상 선택해주세요! (${selectedKeywords.length}/${MAX_SELECTIONS})`);
    }
    setIsAllFieldsFilled(selectedKeywords.length >= MIN_SELECTIONS_REQUIRED);
  }, [selectedKeywords]);

  const handleSelectInterest = (interestId: number) => {
    setSelectedKeywords((currentSelectedKeywords) => {
      const isAlreadySelected = currentSelectedKeywords.includes(interestId);
      if (isAlreadySelected) {
        return currentSelectedKeywords.filter((id) => id !== interestId);
      } else if (currentSelectedKeywords.length < MAX_SELECTIONS) {
        return [...currentSelectedKeywords, interestId];
      }
      return currentSelectedKeywords;
    });
  };
  return (
    <KeywordsWrapper>
      <div className='title'>
        <StyledTypography variant={'middleTitle'}>관심 키워드를 선택해주세요!</StyledTypography>
        <Typography variant={'subtitle3'}>세부 관심 분야를 파악하기 위한 과정이에요</Typography>
      </div>
      <Notice>
        <Typography variant={'count2'}>{noticeText}</Typography>
      </Notice>

      <KeywordsContainer>
        {interestAreas.map((interest) => (
          <StyledButton
            variant={selectedKeywords.includes(interest.id) ? 'active' : 'inactive'}
            key={interest.id}
            onClick={() => handleSelectInterest(interest.id)}
          >
            <Typography variant={selectedKeywords.includes(interest.id) ? 'button3Active' : 'button3'}>
              {interest.name}
            </Typography>
          </StyledButton>
        ))}
      </KeywordsContainer>
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
        <Link to={ROUTES_PATH.loading}>AI 맞춤 커리어 보러가기</Link>
      </Button>
    </KeywordsWrapper>
  );
};

const KeywordsWrapper = styled.div`
  position: relative;
  padding: 12px 0 100px;
  .count {
    display: flex;
    gap: 18px;
  }
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 8px;
`;

const KeywordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledButton = styled(Button)``;

const Notice = styled.div`
  margin: 26px -20px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: ${colors.blue[100]};
  text-align: center;
`;
