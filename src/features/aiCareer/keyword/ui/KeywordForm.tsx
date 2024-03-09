import React, { useEffect, useState } from 'react';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';
import { Button } from 'shared/ui/button/Button';
import { initialValues } from 'shared/constants/data';
import colors from 'shared/styles/color';
import { useUserData } from 'features/aiCareer/@hooks/useUserData';
import axios from 'axios';
import { API } from 'config';
import { getAuthTokenFromCookie } from 'features/auth/api/authService';
import { Loading } from 'pages/loading';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import { Keyword } from 'shared/zustand/userStore';

const MIN_SELECTIONS_REQUIRED = 10;
const MAX_SELECTIONS = 20;

export const KeywordForm = () => {
  const [noticeText, setNoticeText] = useState(`10개 이상 선택해주세요! (0/${MAX_SELECTIONS})`);
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);
  const [keyword, setKeyword] = useState({ keywordCategoryMap: {} });
  const { userDataStore, handleSelectKeyword } = useUserData(initialValues, keyword);

  const { keywordCategoryMap } = keyword;

  useEffect(() => {
    setIsAllFieldsFilled(userDataStore.userKeywords.length > 9);
  }, [userDataStore.userKeywords]);

  useEffect(() => {
    console.log(userDataStore.userKeywords);
    const count = userDataStore.userKeywords.length;

    if (count >= MIN_SELECTIONS_REQUIRED) {
      setNoticeText(`더 많은 키워드로 정확한 분석을 받아보세요! (${count}/${MAX_SELECTIONS})`);
    } else {
      setNoticeText(`10개 이상 선택해주세요! (${count}/${MAX_SELECTIONS})`);
    }

    setIsAllFieldsFilled(count >= MIN_SELECTIONS_REQUIRED);
  }, [userDataStore.userKeywords]);

  const allKeywords = (Object.values(keywordCategoryMap) as unknown as Keyword[][]).reduce(
    (acc, keywords) => [...acc, ...keywords],
    []
  );
  useEffect(() => {
    const fetchKeywords = async () => {
      try {
        const response = await axios.get(API.KEYWORD);
        console.log('Keywords response:', response.data.data);
        setKeyword(response.data.data); // 응답 데이터를 상태에 저장
      } catch (error) {
        console.error('Error getting keywords:', error);
      }
    };

    fetchKeywords();
  }, []);

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
          {allKeywords.map((kw) => (
            <StyledButton
              variant={
                userDataStore.userKeywords.some((selected) => selected.keyword === kw.keyword)
                  ? 'active'
                  : 'inactive'
              }
              key={kw.keyword}
              onClick={() => handleSelectKeyword(kw)}
            >
              <Typography
                variant={
                  userDataStore.userKeywords.some((selected) => selected.keyword === kw.keyword)
                    ? 'button3Active'
                    : 'button3'
                }
              >
                {kw.keyword}
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
        {isAllFieldsFilled ? <Link to={ROUTES_PATH.loading}>AI 맞춤 커리어 보러가기 </Link> : '계속하기'}
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
