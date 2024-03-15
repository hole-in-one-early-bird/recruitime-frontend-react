import React from 'react';
import styled from 'styled-components';
import { Typography } from '../typography/Typography';
import { variantStyles } from './buttonType';

type VariantType =
  | 'primary'
  | 'confirm'
  | 'inConfirm'
  | 'active'
  | 'inactive'
  | 'primaryDisabled'
  | 'check'
  | 'cancel';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: VariantType;
  style?: React.CSSProperties;
  width?: string;
  TypographyVariant: string;
}

export const Button: React.FC<Props> = ({
  type = 'button',
  onClick,
  children,
  variant = 'primary',
  style,
  width = 'auto',
  TypographyVariant,
}) => {
  return (
    <StyledButton type={type} onClick={onClick} variant={variant} style={style} width={width}>
      <Typography variant={TypographyVariant}>{children}</Typography>
    </StyledButton>
  );
};

const StyledButton = styled.button<{ variant: VariantType; width: string }>`
  padding: 18px;
  width: ${({ width }) => width};
  ${({ variant }) => variantStyles[variant] || variantStyles.primary};
`;
