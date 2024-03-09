import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import styled from 'styled-components';
import React from 'react';

import { common } from 'shared/styles/common';
import { ChatInput } from 'shared/ui/input/ChatInput';
import { color } from 'html2canvas/dist/types/css/types/color';
import colors from 'shared/styles/color';
import axios from 'axios';
import { API } from 'config';
import { getAuthTokenFromCookie } from 'features/auth/api/authService';
import { Typography } from 'shared/ui/typography/Typography';

type InputData = {
  job_name: string;
};

type ChatMessage = {
  id: number;
  content: string | JSX.Element;
  isUser: boolean;
};
const Data = [
  {
    id: 1,
    content: '직업이름',
    isUser: true,
  },
  {
    id: 2,
    content:
      '안녕하세요! 커리어 챗봇 쿠르에요! 커리어와 관련된 궁금한 이야기가 있으신가요? 제게 물어보세요!',
    isUser: false,
  },
];

export const Chat = () => {
  const [job, setJob] = useState<InputData>({ job_name: '' });
  const [chatData, setChatData] = useState<ChatMessage[]>(Data);
  const [userId, setUserId] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };

  const iconSrc = inputValue
    ? process.env.PUBLIC_URL + '/images/icon/activeCircleArrowIcon.svg' // 활성화된 아이콘 경로
    : process.env.PUBLIC_URL + '/images/icon/CircleArrowIcon.svg'; // 기본 아이콘 경로

  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatData]);

  const downloadImage = (dataUrl: string, filename: string) => {
    // `<a>` 태그를 생성합니다.
    const link = document.createElement('a');
    // 데이터 URL을 `href` 속성에 설정합니다.
    link.href = dataUrl;
    // 다운로드할 파일 이름을 `download` 속성에 설정합니다.
    link.download = filename;
    // `<a>` 태그를 클릭하여 다운로드를 시작합니다.
    link.click();
  };

  const captureChat = async () => {
    if (chatBoxRef.current) {
      try {
        const canvas = await html2canvas(chatBoxRef.current);
        const image = canvas.toDataURL('image/png');
        downloadImage(image, 'chat-capture.png');
      } catch (error) {
        console.error('Failed to capture the chat:', error);
      }
    }
  };

  const handleImgClick = async () => {
    try {
      const response = await axios.post(`${API.CHAT}`, { message: inputValue });

      console.log('Chat request successful:', response.data);
    } catch (error) {
      console.error('Error sending chat request:', error);
    }
  };

  return (
    <ChatWrapper>
      <ChatBox ref={chatBoxRef}>
        {/* 채팅 내용 표시 */}
        {Data.map((message) => (
          <div key={message.id} className={message.isUser ? 'userMessage' : 'botMessage'}>
            {message.isUser ? (
              <>
                <UserContainer>
                  <UserBubble>
                    <Typography variant={'body3'} style={{ color: colors.white }}>
                      {message.content}
                    </Typography>
                    {/* <Typography variant={'body3'}>{message.content}</Typography> */}
                  </UserBubble>
                </UserContainer>
              </>
            ) : (
              <>
                <BotContainer>
                  <ProfileInfo>
                    <img
                      src={process.env.PUBLIC_URL + '/images/char/recruitime.png'}
                      alt='characterImage'
                    />
                  </ProfileInfo>
                  <BotBubble>
                    <Typography variant={'body3'}>{message.content}</Typography>
                  </BotBubble>
                </BotContainer>
              </>
            )}
          </div>
        ))}
      </ChatBox>
      <BottomChat>
        <StyledChatInput
          name={'message'}
          placeholder='메세지를 입력해주세요'
          value={inputValue}
          onChange={handleInputChange}
        />
        <div onClick={handleImgClick}>
          <img src={iconSrc} alt='circleArrowIcon' />
        </div>
      </BottomChat>
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 20px;
`;

const ChatBox = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const BotContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 16px;

  img {
    width: 40px; // 캐릭터 이미지 크기 조절
    height: 40px;
    margin-right: 8px; // 캐릭터 이미지와 대화 말풍선 사이 간격
  }
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 16px;
`;

const ProfileInfo = styled.div`
  margin-right: 12px; // 프로필 이미지와 대화 말풍선 사이 간격
`;

const UserBubble = styled.div`
  background-color: ${colors.blue[500]}; // 사용자 대화 말풍선 배경색
  color: ${colors.white}; // 사용자 대화 말풍선 텍스트 색상
  padding: 12px;
  border-radius: 8px;
  max-width: 60%; // 대화 말풍선 최대 너비
`;

const BotBubble = styled.div`
  background-color: ${colors.gray[50]}; // 사용자 대화 말풍선 배경색
  color: ${colors.white}; // 사용자 대화 말풍선 텍스트 색상
  padding: 12px 18px;
  border-radius: 8px;
  max-width: 60%; // 대화 말풍선 최대 너비
`;

const BottomChat = styled.div`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 14px 17px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${colors.white};
  ${common.flexCenterRow};
  gap: 12px;
  border-top: 1px solid ${colors.gray[400]};
`;

const StyledChatInput = styled(ChatInput)`
  flex: 1;
  margin-right: 10px;
`;
