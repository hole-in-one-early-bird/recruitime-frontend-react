import colors from 'shared/styles/color';

interface TypographyVariant {
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string;
  letterSpacing?: string;
  color?: string;
}

interface TypographyVariants {
  [variant: string]: TypographyVariant;
}

export const typographyStyles: TypographyVariants = {
  largeTitle: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '32px',
    letterSpacing: '-0.02em',
    color: colors.gray[900],
  },
  middleTitle: {
    fontSize: '22px',
    fontWeight: 700,
    lineHeight: '1',
    letterSpacing: '-0.02em',
    color: colors.gray[900],
  },
  subtitle: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '100%',
    letterSpacing: '-0.02em',
    color: colors.gray[600],
  },
  subtitle2: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '-0.02em',
    color: colors.gray[600],
  },
  subtitle3: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
    color: colors.gray[500],
  },
  placeholder: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '100%',
    letterSpacing: '-0.02em',
    color: colors.gray[400],
  },
  // placeholderActive: {
  //   color: colors.gray[700],
  // },
  button1: {
    color: colors.gray[500],
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  // button1Active: {
  //   color: colors.blue[600],
  // },
  button2: {
    color: colors.gray[500],
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  button2Active: {
    color: colors.white,
    fontWeight: 700,
  },
  button3: {
    color: colors.gray[500],
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
  },
  // button3Active: {
  //   color: colors.blue[600],
  //   fontWeight: 600,
  // },
  keyword: {
    color: colors.gray[400],
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: 'auto',
    letterSpacing: '-0.02em',
  },
  stepButton: {
    color: colors.white,
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: 'auto',
    letterSpacing: '-0.02em',
  },
  count1: {
    color: colors.blue[600],
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '1',
    letterSpacing: '-0',
  },
  count2: {
    color: colors.blue[600],
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  selectBox: {
    color: colors.gray[300],
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  selectList: {
    color: colors.gray[500],
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  box1: {
    color: colors.gray[800],
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  box2: {
    color: colors.gray[700],
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  box3: {
    color: colors.gray[800],
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  caption: {
    color: colors.gray[400],
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  body1: {
    color: colors.gray[700],
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  body2: {
    color: colors.gray[700],
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '-0.02em',
  },
  body3: {
    color: colors.gray[600],
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '-0.02em',
  },
  label: {
    color: colors.gray[800],
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  title1: {
    color: colors.white,
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '20px',
    letterSpacing: '-0.02em',
  },
  title2: {
    color: colors.gray[600],
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  title3: {
    color: colors.gray[800],
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  error: {
    color: colors.error,
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
};
