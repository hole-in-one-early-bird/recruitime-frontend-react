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
import { useUserStore } from 'shared/zustand/userStore';
import useCustomizedCareerStore from 'shared/zustand/store';
import { useChatStore } from 'shared/zustand/chatStore';

type InputData = {
  job_name: string;
};

type ChatMessage = {
  id: number;
  content: string;
  isUser: boolean;
};

export const Chat = () => {
  const { chatBoxRef, setChatBoxRef } = useChatStore();
  const [isChatProcessing, setChatProcessing] = useState(false); // 추가

  const [userId, setUserId] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('');
  const resultData = useCustomizedCareerStore((state) => state.userData);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };

  const [chatData, setChatData] = useState<ChatMessage[]>([
    {
      id: 1,
      content: resultData?.jobName,
      isUser: true,
    },
    {
      id: 2,
      content:
        '안녕하세요! 커리어 챗봇 쿠르에요! 커리어와 관련된 궁금한 이야기가 있으신가요? 제게 물어보세요!',
      isUser: false,
    },
  ]);

  const iconSrc = inputValue
    ? process.env.PUBLIC_URL + '/images/icon/activeCircleArrowIcon.svg' // 활성화된 아이콘 경로
    : process.env.PUBLIC_URL + '/images/icon/CircleArrowIcon.svg'; // 기본 아이콘 경로

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatRef]);

  useEffect(() => {
    setChatBoxRef(chatRef);
  }, [setChatBoxRef, chatRef]);

  const handleImgClick = async () => {
    if (isChatProcessing) {
      // alert('리쿠르탐 응답중입니다');
      return;
    }
    if (!inputValue.trim()) {
      // alert('내용을 작성해주세요');
      return;
    }
    setInputValue('');
    const token = getAuthTokenFromCookie();
    setChatProcessing(true);

    // Add user's input to chatData
    const newUserMessage = {
      id: chatData.length + 1,
      content: inputValue,
      isUser: true,
    };

    setChatData((prevChatData) => [...prevChatData, newUserMessage]);

    try {
      const response = await axios.post(
        `${API.CHAT}`,
        { message: inputValue, jobRecommendationCode: resultData.jobRecommendationCode },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Add chatbot's response to chatData
      const newChatbotMessage = {
        id: chatData.length + 2,
        content: response.data?.data?.responseMessage || 'No response message',
        isUser: false,
      };

      setChatData((prevChatData) => [...prevChatData, newChatbotMessage]);

      console.log('Chat request successful:', response.data);
    } catch (error) {
      console.error('Error sending chat request:', error);
    } finally {
      // 응답 후 입력란 활성화
      setChatProcessing(false);
    }
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handleImgClick();
      setIsInputFocused(false);
    }
  };

  return (
    <ChatWrapper>
      <ChatBox ref={chatBoxRef}>
        {/* 채팅 내용 표시 */}
        {chatData.map((message) => (
          <div key={message.id} className={message.isUser ? 'userMessage' : 'botMessage'}>
            {message.isUser ? (
              <>
                <UserContainer>
                  <UserBubble>
                    <Typography variant={'body03'} style={{ color: colors.white }}>
                      {message.content}
                    </Typography>
                  </UserBubble>
                </UserContainer>
              </>
            ) : (
              <>
                <BotContainer>
                  <ProfileInfo>
                    <img
                      src={process.env.PUBLIC_URL + '/images/char/recruitime.svg'}
                      alt='characterImage'
                    />
                  </ProfileInfo>
                  <BotBubble>
                    <Typography variant={'body03'} style={{ color: colors.gray[600] }}>
                      {message.content}
                    </Typography>
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
          onFocus={() => setIsInputFocused(true)}
          onKeyPress={(e: any) => handleKeyPress(e)}
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
  margin-top: 20px;
`;

const ChatBox = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
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
  border-top: 1px solid #e9e9e9;
`;

const StyledChatInput = styled(ChatInput)`
  flex: 1;
  margin-right: 10px;
`;
