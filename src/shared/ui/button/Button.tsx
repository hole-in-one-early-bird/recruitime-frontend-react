import React from 'react';
import colors from 'shared/styles/color';
import styled, { css } from 'styled-components';
import { variantStyles } from './buttonType';

type VariantType = 'primary' | 'confirm' | 'active' | 'inactive' | 'primaryDisabled' | 'cancel';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: VariantType;
  style?: React.CSSProperties;
}

export const Button: React.FC<Props> = ({
  type = 'button',
  onClick,
  children,
  variant = 'primary',
  style,
}) => {
  return (
    <StyledButton type={type} onClick={onClick} variant={variant} style={style}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ variant: VariantType }>`
  ${({ variant }) => variantStyles[variant] || variantStyles.primary}
`;
