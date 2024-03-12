import React, { ChangeEventHandler, useState } from 'react';
import colors from 'shared/styles/color';
import styled from 'styled-components';
import { Typography } from '../typography/Typography';

interface ChatInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLInputElement>;
}

export const ChatInput: React.FC<ChatInputProps> = ({ className, style, ref, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ChatInputWrapper className={className}>
      <InputContainer>
        <StyledInput
          style={style}
          $isFocused={isFocused}
          ref={ref}
          {...props} // 나머지 props를 전달
        />
      </InputContainer>
    </ChatInputWrapper>
  );
};

const ChatInputWrapper = styled.div`
  width: 100%;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input<{ $isFocused: boolean }>`
  width: 100%;
  padding: 10px 16px;
  border-radius: 5px;
  outline: none;
  transition: border 0.3s ease;
  background-color: ${colors.gray[50]};
  &:disabled {
    border: 1px solid ${colors.gray[200]};
  }

  &::placeholder {
    color: ${({ $isFocused }) => ($isFocused ? colors.gray[800] : colors.gray[300])};
  }
`;
