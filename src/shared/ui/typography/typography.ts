import colors from 'shared/styles/color';
import { css } from 'styled-components';

export const typographyStyles = {
  largeTitle: css`
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: ${colors.gray[900]};
  `,
  subtitle: css`
    font-size: 16px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: ${colors.gray[600]};
  `,
  placeholder: css`
    font-size: 16px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: ${colors.gray[400]};
  `,
  placeholderActive: css`
    color: ${colors.gray[700]};
  `,
  button1: css`
    color: ${colors.gray[500]};
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.02em;
  `,
  button1Active: css`
    color: ${colors.blue[600]};
  `,
  button2: css`
    color: ${colors.gray[500]};
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.02em;
  `,
  button2Active: css`
    color: ${colors.white};
    font-weight: 700;
  `,
  button3: css`
    color: ${colors.gray[500]};
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  `,
  button3Active: css`
    color: ${colors.blue[600]};
    font-weight: 600;
  `,
  keyword: css`
    color: ${colors.gray[400]};
    font-size: 18px;
    font-weight: 700;
    line-height: auto;
    letter-spacing: -0.02em;
  `,
  stepButton: css`
    color: var(--white);
    font-size: 18px;
    font-weight: 700;
    line-height: auto;
    letter-spacing: -0.02em;
  `,
  count1: css`
    color: ${colors.blue[600]};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0;
  `,
  count2: css`
    color: ${colors.blue[600]};
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.02em;
  `,
  selectBox: css`
    color: ${colors.blue[600]};
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.02em;
  `,
  selectList: css`
    color: ${colors.gray[500]};
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.02em;
  `,
  box1: css`
    color: ${colors.gray[800]};
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.02em;
  `,
  box2: css`
    color: ${colors.gray[700]};
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.02em;
  `,
  caption: css`
    color: ${colors.gray[400]};
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.02em;
  `,
  body1: css`
    color: ${colors.gray[700]};
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.02em;
  `,
  body2: css`
    color: ${colors.gray[700]};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.02em;
  `,
  body3: css`
    color: ${colors.gray[600]};
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.02em;
  `,
  title1: css`
    color: ${colors.white};
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.02em;
  `,
  title2: css`
    color: ${colors.gray[600]};
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.02em;
  `,
};
