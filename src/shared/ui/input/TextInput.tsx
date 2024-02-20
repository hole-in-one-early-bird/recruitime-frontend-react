import React, { ChangeEventHandler, useState } from 'react';
import colors from 'shared/styles/color';
import styled from 'styled-components';
import { Typography } from '../typography/Typography';

interface TextInputProps {
  className?: string;
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  style?: React.CSSProperties;
  isDisabled?: boolean;
  error?: string;
  isValid?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  className,
  type,
  name,
  placeholder,
  value,
  onChange,
  label,
  style,
  isDisabled,
  error,
  isValid,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInputWrapper className={className}>
      {label && (
        <Label>
          <Typography variant={'label'}>{label}</Typography>
        </Label>
      )}
      <InputContainer>
        <StyledInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          $isFocused={isFocused}
          $isValid={isValid}
          $isError={!!error}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={style}
          disabled={isDisabled}
        />
        {isValid && <CheckIcon />}
      </InputContainer>

      {error && (
        <ErrorMsg>
          <Typography variant={'error'}>{error}</Typography>
        </ErrorMsg>
      )}
    </TextInputWrapper>
  );
};

export default TextInput;

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

  &:disabled {
    border: 1px solid ${colors.gray[200]};
  }

  &::placeholder {
    color: ${({ $isFocused }) => ($isFocused ? colors.gray[800] : colors.gray[300])};
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const ErrorMsg = styled.div`
  margin-top: 6px;
`;

const CheckIcon = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/images/icon/checkIcon.png', // 아이콘의 경로를 지정하세요
  alt: 'Check',
})`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;
