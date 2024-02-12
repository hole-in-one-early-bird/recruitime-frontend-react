import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import styles from './typography.module.css';

type TypographyProps = {
  variant: keyof typeof styles;
  style?: React.CSSProperties;
  children: string;
} & HTMLAttributes<HTMLHeadingElement>;

const TAG_MAPPING: { [key: string]: keyof JSX.IntrinsicElements } = {
  largetitle: 'h1',
};

export const Typography: React.FC<TypographyProps> = ({ variant, style, children, ...props }) => {
  return (
    <StyledTypography
      as={TAG_MAPPING[variant] || 'p'}
      className={styles[variant]}
      style={{ ...style }}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.div``;
