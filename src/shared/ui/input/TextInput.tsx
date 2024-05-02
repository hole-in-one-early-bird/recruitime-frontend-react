import React, { ChangeEventHandler, useState } from 'react';
import colors from 'shared/styles/color';
import styled from 'styled-components';
import { Typography } from '../typography/Typography';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  label?: string;
  style?: React.CSSProperties;
  caption?: string;
  error?: string;
  isValid?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  className,
  name,
  label,
  style,
  error,
  isValid,
  caption,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInputWrapper className={className}>
      {label && (
        <Label>
          <Typography variant={'subTitle01'} style={{ color: colors.gray[800] }}>
            {label}
          </Typography>
        </Label>
      )}
      <InputContainer>
        <StyledInput
          name={name}
          $isFocused={isFocused}
          $isValid={isValid}
          $isError={!!error}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={style}
          {...props} // 나머지 props를 전달
        />
        {isValid && <CheckIcon />}
      </InputContainer>
      {caption && (
        <Caption>
          <Typography variant={'caption03'} style={{ color: colors.gray[400] }}>
            {caption}
          </Typography>
        </Caption>
      )}
      {error && (
        <ErrorMsg>
          <Typography variant={'caption01'} style={{ color: colors.error }}>
            {error}
          </Typography>
        </ErrorMsg>
      )}
    </TextInputWrapper>
  );
};

const TextInputWrapper = styled.div`
  width: 100%;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input<{ $isFocused: boolean; $isError: boolean; $isValid?: boolean }>`
  width: 100%;
  padding: 18px;
  border: 1px solid
    ${({ $isFocused, $isError, $isValid }) =>
      $isError ? colors.error : $isFocused || $isValid ? colors.blue[400] : '#D9D9D9'};
  border-radius: 10px;
  outline: none;
  transition: border 0.3s ease;
  color: ${colors.gray[700]};
  &:disabled {
    border: 1px solid ${colors.gray[200]};
  }

  &::placeholder {
    color: ${({ $isFocused }) => ($isFocused ? colors.gray[700] : colors.gray[300])};
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Caption = styled.div`
  margin-top: 6px;
`;

const ErrorMsg = styled.div`
  margin-top: 6px;
`;

const CheckIcon = styled.img.attrs({
  src: '/images/icon/checkIcon.svg', // 아이콘의 경로를 지정하세요
  alt: 'Check',
})`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;
