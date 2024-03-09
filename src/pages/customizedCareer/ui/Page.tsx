import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import colors from 'shared/styles/color';
import { Typography } from 'shared/ui/typography/Typography';
import { ROUTES_PATH } from 'shared/constants/routes';
import useCustomizedCareerStore from 'shared/zustand/store';
import { useUserData } from 'features/aiCareer/@hooks/useUserData';
import { initialValues } from 'shared/constants/data';

interface UserData {
  id: number;
  user_name: string;
  job_name: string;
  job_description: string;
  related_major: string;
  certifications: string;
  recommendation_reason: string;
  user_id: number;
}

export const CustomizedCareer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [useResult, setUseResult] = useState<UserData | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [bookId, setBookId] = useState<number | null>(null);
  const resultData = useCustomizedCareerStore((state) => state.userData);
  const { userDataStore } = useUserData(initialValues);

  const accordionSections = [
    {
      header: '관련 학과',
      // content: resultData.relatedMajor,
      content: 'a',
    },
    {
      header: '관련 자격증',
      content: 'a',
      //  content: resultData.certifications,
    },
    {
      header: '왜 이 커리어가 추천 되었나요?',
      content: 'a',
      // content: resultData.recommendationReason,
    },
  ];
  const toggleAccordion = (index: any) => {
    setOpenSection((prevOpenSection) => (prevOpenSection === index ? null : index));
  };

  return (
    <CustomizedCareerWrapper>
      <CustomizedCareerContainer>
        <Typography
          variant={'largeTitle'}
          className='space'
        >{`${userDataStore.name}님의\n맞춤 커리어 분석 결과에요`}</Typography>
        <ContentBox>
          <Content>
            <AiChat>
              <Character>
                <img
                  src={process.env.PUBLIC_URL + '/images/char/resultCharacter.png'}
                  alt='characterImage'
                />
              </Character>

              <Link to={ROUTES_PATH.chat}>
                <RadiusButton>
                  <Typography variant={'button4'}>커리어 챗봇 연결</Typography>
                </RadiusButton>
              </Link>
            </AiChat>
          </Content>
          <ResultBox>
            <CareerBox>
              <Job>
                <Typography variant={'title2'} style={{ color: colors.white }}>
                  {resultData?.jobName}
                </Typography>
              </Job>
              <Des>
                <Typography variant={'body2'}>{resultData?.jobDescription}</Typography>
              </Des>
            </CareerBox>
            <AccordionContainer>
              {accordionSections.map((section, index) => (
                <AccordionSection key={index}>
                  <AccordionHeader onClick={() => toggleAccordion(index)}>
                    {section.header}
                    <Icon>{openSection === index ? <FaAngleUp /> : <FaAngleDown />}</Icon>
                  </AccordionHeader>
                  <AccordionContent $isOpen={openSection === index}>{section.content}</AccordionContent>
                </AccordionSection>
              ))}
            </AccordionContainer>
          </ResultBox>
        </ContentBox>
        <Link to={ROUTES_PATH.loading}>
          <ReplyButton>
            <img src={process.env.PUBLIC_URL + '/images/icon/refreshIcon.svg'} alt='refreshIcon' />
            <Typography variant={'button4'} style={{ fontWeight: '500', color: colors.white }}>
              다시하기
            </Typography>
          </ReplyButton>
        </Link>
      </CustomizedCareerContainer>
    </CustomizedCareerWrapper>
  );
};

const CustomizedCareerWrapper = styled.div`
  margin: 0 -20px;
  background-color: ${colors.blue[200]};
  .space {
    white-space: pre-wrap;
  }
`;
const CustomizedCareerContainer = styled.div`
  position: relative;
  padding: 20px;
`;

const ContentBox = styled.div`
  position: relative;
`;
const Content = styled.div`
  position: relative;
  height: 750px;
  margin-right: -20px;
`;

const AiChat = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const Character = styled.div`
  position: absolute;
  right: -140px;
  top: 10px;
  width: 400px;
  height: 400px;
`;

const RadiusButton = styled.div`
  display: inline-block;
  padding: 10px 18px;
  color: ${colors.blue[400]};
  border-radius: 30px;
  background-color: ${colors.white};
  position: absolute;
  top: 60px;
  right: 120px;
  padding: 15px 20px;
  background-color: ${colors.white};
  border-radius: 30px;

  box-shadow: 0 0 15px 0 rgba(114, 167, 232, 0.1);
`;

const ReplyButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: inline-flex;
  gap: 4px;
  align-items: flex-start;
  padding: 16px;
  color: ${colors.white};
  border-radius: 30px;
  background-color: ${colors.blue[500]};
`;

const CareerBox = styled.div``;

const ResultBox = styled.div`
  width: 100%;
  position: absolute;
  top: 150px;
`;

const Job = styled.div`
  margin-bottom: 6px;
  padding: 20px;
  background-color: ${colors.blue[500]};
  border-radius: 10px;
`;

const Des = styled.div`
  margin-bottom: 12px;
  padding: 20px;
  background-color: ${colors.white};
  border-radius: 10px;
`;

const AccordionContainer = styled.div`
  width: 100%;
`;

const AccordionSection = styled.div`
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: ${colors.white};
`;

const Icon = styled.div`
  color: ${colors.gray[400]};
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${colors.white};
`;

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  padding: 0 20px 20px;
  line-height: 2.3rem;
  letter-spacing: 0.01rem;
`;
