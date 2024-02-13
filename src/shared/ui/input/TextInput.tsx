import React, { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';

interface TextInputProps {
  placeholder?: string;
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  style?: React.CSSProperties;
  isDisabled?: boolean;
}
const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  type,
  value,
  onChange,
  label,
  style,
  isDisabled,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        $isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={style}
        disabled={isDisabled}
      />
    </TextInputWrapper>
  );
};

export default TextInput;

const TextInputWrapper = styled.div`
  width: 70%;
`;

const StyledInput = styled.input<{ $isFocused: boolean }>`
  width: 100%;
  padding: 18px;
  margin-bottom: 50px;
  border: 1px solid
    ${({ $isFocused, theme }) => ($isFocused ? theme.colors.blue400 : theme.colors.gray400)};
  border-radius: 10px;
  font-size: ${(prop) => prop.theme.fonts.placeholder};
  font-weight: ${(prop) => prop.theme.fontWeight.placeholder};
  outline: none;
  transition: border 0.3s ease;
  &::placeholder {
    color: ${({ $isFocused, theme }) => ($isFocused ? theme.colors.gray800 : theme.colors.gray500)};
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: ${(prop) => prop.theme.fonts.mediumText};
  font-weight: ${(prop) => prop.theme.fontWeight.smallText};
`;
