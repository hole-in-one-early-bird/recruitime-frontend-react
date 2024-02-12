import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { typographyStyles } from './typography';

type TypographyProps = {
  variant:
    | 'largeTitle'
    | 'subtitle'
    | 'placeholder'
    | 'button1'
    | 'button2'
    | 'button3'
    | 'stepButton'
    | 'count1'
    | 'count2'
    | 'selectBoxList'
    | 'box'
    | 'caption'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'title1'
    | 'title2';
  style?: React.CSSProperties;
  children: string;
} & HTMLAttributes<HTMLHeadingElement>;

const TAG_MAPPING: { [key in TypographyProps['variant']]: keyof JSX.IntrinsicElements } = {
  largeTitle: 'h1',
  subtitle: 'p',
  placeholder: 'p',
  button1: 'p',
  button2: 'p',
  button3: 'p',
  stepButton: 'p',
  count1: 'p',
  count2: 'p',
  selectBoxList: 'p',
  box: 'p',
  caption: 'p',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  title1: 'p',
  title2: 'p',
};

export const Typography: React.FC<TypographyProps> = ({ variant, style, children, ...props }) => {
  return (
    <StyledTypography as={TAG_MAPPING[variant] || 'p'} style={{ ...style }} {...props}>
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.div`
  ${({ variant }) => typographyStyles[variant]}
`;
