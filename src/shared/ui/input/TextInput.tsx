import React, { ChangeEventHandler, useState } from 'react';
import colors from 'shared/styles/color';
import styled from 'styled-components';
import { Typography } from '../typography/Typography';

interface TextInputProps {
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  style?: React.CSSProperties;
  isDisabled?: boolean;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  label,
  style,
  isDisabled,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInputWrapper>
      {label && (
        <Label>
          <Typography variant={'label'}>{label}</Typography>
        </Label>
      )}
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        $isFocused={isFocused}
        $isError={!!error}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={style}
        disabled={isDisabled}
      />
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

const StyledInput = styled.input<{ $isFocused: boolean; $isError: boolean }>`
  width: 100%;
  padding: 18px;
  border: 1px solid
    ${({ $isFocused, $isError }) =>
      $isError ? colors.error : $isFocused ? colors.blue[400] : '#D9D9D9'};
  border-radius: 10px;
  outline: none;
  transition: border 0.3s ease;
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
