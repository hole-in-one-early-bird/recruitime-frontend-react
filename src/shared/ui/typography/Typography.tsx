import React from 'react';
import styles from './typography.module.css';
interface TypographyProps {
  variant: keyof typeof styles;
  color?: string;
  children: string;
}&HTMLAttributes<HTMLHeadingElement>

export const Typography: React.FC<TypographyProps> = ({ variant, color, children,...props }) => {
  return (
    <StyledTypography className={`${variant}`} style={styles}>
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.div`

`;