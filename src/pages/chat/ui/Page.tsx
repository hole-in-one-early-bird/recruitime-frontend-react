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

type InputData = {
  job_name: string;
};

type ChatMessage = {
  id: number;
  content: string | JSX.Element;
  isUser: boolean;
};

export const Chat = () => {
  const [job, setJob] = useState<InputData>({ job_name: '' });
  const [chatData, setChatData] = useState<ChatMessage[]>([]);
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

  useEffect(() => {
    const fetchUserData = async () => {
      const token = getAuthTokenFromCookie();
      const msg = {
        message: '연봉이 얼마야?',
      };
      try {
        const response = await axios.post(API.CHAT, msg, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setChatData([
          { id: 1, content: response.data, isUser: true },
          {
            id: 2,
            content: (
              <span>
                안녕하세요! 커리어 <span style={{ fontWeight: '700' }}>챗봇 쿠르</span>에요!
                <br />
                <span style={{ fontWeight: '700' }}>{response.data}</span>와 관련된 궁금한 이야기가
                있으신가요? 제게 물어보세요!
              </span>
            ),
            isUser: false,
          },
        ]);
        setJob({ job_name: response.data });
      } catch (error) {
        console.error('에러:', error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <ChatWrapper>
      <ChatBox ref={chatBoxRef}>
        {chatData.map((chat, index) => (
          <ChatBubble key={chat.id} $isUser={chat.isUser}>
            <BotContainer $isUser={chat.isUser}>
              <ProfileInfo $isUser={chat.isUser}>
                <img src={process.env.PUBLIC_URL + '/image/chatCharacter.png'} alt='characterImage' />
              </ProfileInfo>
              <UserBubble $isUser={chat.isUser}>{chat.content}</UserBubble>
            </BotContainer>
          </ChatBubble>
        ))}
      </ChatBox>
      <BottomChat>
        <StyledChatInput
          name={'message'}
          placeholder='메세지를 입력해주세요'
          value={inputValue}
          onChange={handleInputChange}
        />
        <img src={iconSrc} alt='circleArrowIcon' />
      </BottomChat>
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  position: relative;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 280px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px; /* 스크롤 막대의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.gray[500]}; /* 스크롤 막대의 색상 */
    border-radius: 4px; /* 스크롤 막대의 모서리를 둥글게 만듭니다. */
  }
`;

const BotContainer = styled.div<{ $isUser: boolean }>`
  display: flex;
  gap: 10px;
  justify-content: ${(props) => (props.$isUser ? 'flex-end' : 'flex-start')};
`;

const ChatBubble = styled.div<{ $isUser: boolean }>`
  max-width: 400px;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 1.6rem;
  line-height: 2.3rem;
  align-self: ${(props) => (props.$isUser ? 'flex-end' : 'flex-start')};
`;

const UserBubble = styled(ChatBubble)<{ $isUser: boolean }>`
  width: 100%;

  color: ${({ $isUser }) => ($isUser ? colors.white : colors.gray[800])};
  background-color: ${({ $isUser }) => ($isUser ? colors.blue[500] : colors.gray[100])};
`;

const ProfileInfo = styled.div<{ $isUser: boolean }>`
  display: flex;
  display: ${(props) => (props.$isUser ? 'none' : 'block')};
  img {
    width: 60px;
  }
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
  ${common.flexCenterRow};
  gap: 12px;
  border-top: 1px solid ${colors.gray[400]};
`;

const StyledChatInput = styled(ChatInput)``;
