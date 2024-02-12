import React from 'react';

interface TypographyProps {
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
  color?: string;
  children: string;
}

export const Typography: React.FC<TypographyProps> = ({ variant, color, children }) => {
  return <div className={`${variant}`}>{children}</div>;
};
