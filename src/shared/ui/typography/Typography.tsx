import React from 'react';
import styled, { css } from 'styled-components';
import { typographyStyles } from './typographyType';

// Props 타입 정의
interface TypographyProps {
  variant: keyof typeof typographyStyles;
  children: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Typography = ({ variant, children, className, style }: TypographyProps) => {
  return (
    <StyledTypography variant={variant} className={className} style={style}>
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.div<TypographyProps>`
  ${({ variant, color }) => {
    // 스타일 객체를 직접 구성하여 `css` 함수에 전달
    const style = typographyStyles[variant] || typographyStyles.body1;
    return css`
      font-size: ${style.fontSize};
      font-weight: ${style.fontWeight};
      line-height: ${style.lineHeight};
      letter-spacing: ${style.letterSpacing};
      color: ${style.color};
    `;
  }}
`;
