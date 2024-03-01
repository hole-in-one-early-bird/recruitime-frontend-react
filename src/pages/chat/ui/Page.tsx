import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import styled from 'styled-components';
import React from 'react';

import { common } from 'shared/styles/common';
import { ChatInput } from 'shared/ui/input/ChatInput';

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
  return (
    <ChatWrapper>
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

const ChatWrapper = styled.div``;

const BottomChat = styled.div`
  ${common.flexCenterRow};
  gap: 12px;
`;

const StyledChatInput = styled(ChatInput)``;
