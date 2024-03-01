import React, { useEffect, useState } from 'react';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';
import { Button } from 'shared/ui/button/Button';
import { initialValues, interestAreas, keywords } from 'shared/constants/data';
import colors from 'shared/styles/color';
import { Keyword, useUserData } from 'features/aiCareer/@hooks/useUserData';

const MIN_SELECTIONS_REQUIRED = 10;
const MAX_SELECTIONS = 20;

export const KeywordForm = () => {
  const [userKeywords, setSelectedKeywords] = useState<number[]>([]);
  const [noticeText, setNoticeText] = useState(`10개 이상 선택해주세요! (0/${MAX_SELECTIONS})`);
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);
  const { userData, handleSelectKeyword } = useUserData(initialValues);
  const { keywordCategoryMap } = keywords;

  useEffect(() => {
    setIsAllFieldsFilled(userData.userKeywords.length > 9);
  }, [userData.userKeywords]);

  useEffect(() => {
    if (userData.userKeywords.length >= MIN_SELECTIONS_REQUIRED) {
      setNoticeText(
        `더 많은 키워드로 정확한 분석을 받아보세요! (${userData.userKeywords.length}/${MAX_SELECTIONS})`
      );
    } else {
      setNoticeText(`10개 이상 선택해주세요! (${userData.userKeywords.length}/${MAX_SELECTIONS})`);
    }
    setIsAllFieldsFilled(userData.userKeywords.length >= MIN_SELECTIONS_REQUIRED);
  }, [userData.userKeywords]);

  useEffect(() => {
    sessionStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  const allKeywords = (Object.values(keywordCategoryMap) as unknown as Keyword[][]).reduce(
    (acc, keywords) => [...acc, ...keywords],
    []
  );

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
        <div className='keyword'>
          {allKeywords.map((keyword) => (
            <StyledButton
              variant={
                userData.userKeywords.some(
                  (selectedKeyword) => selectedKeyword.keyword === keyword.keyword
                )
                  ? 'active'
                  : 'inactive'
              }
              key={keyword.keyword}
              onClick={() => handleSelectKeyword(keyword)}
            >
              <Typography
                variant={
                  userData.userKeywords.some(
                    (selectedKeyword) => selectedKeyword.keyword === keyword.keyword
                  )
                    ? 'button3Active'
                    : 'button3'
                }
              >
                {keyword.keyword}
              </Typography>
            </StyledButton>
          ))}
        </div>
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
        AI 맞춤 커리어 보러가기
        {/* <Link to={ROUTES_PATH.loading}>AI 맞춤 커리어 보러가기</Link> */}
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
  .keyword {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const StyledButton = styled(Button)``;

const Notice = styled.div`
  margin: 26px -20px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: ${colors.blue[100]};
  text-align: center;
`;
