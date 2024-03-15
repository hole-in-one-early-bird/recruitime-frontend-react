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
// medium:500, semibold:600, bold:700, extrabold:800

export const typographyStyles: TypographyVariants = {
  base: {
    fontSize: '16px',
  },
  header: {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '0',
  },
  textbox: {
    fontSize: '16px',
    fontWeight: 400,
  },
  toastButton: {
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '20px',
  },

  mainTitle01: {
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '32px',
  },
  mainTitle02: {
    fontSize: '22px',
    fontWeight: 600,
  },
  mainTitle03: {
    fontSize: '20px',
    fontWeight: 600,
  },
  subTitle01: {
    fontSize: '16px',
    fontWeight: 500,
  },
  subTitle02: {
    fontSize: '16px',
    fontWeight: 400,
  },
  button01: {
    fontSize: '18px',
    fontWeight: 600,
  },
  button02: {
    fontSize: '16px',
    fontWeight: 500,
  },
  // 활성화 되면
  //    font-weight: 500,
  button03: {
    fontSize: '16px',
    fontWeight: 400,
  },
  // 활성화 되면
  //    font-weight: 500,
  button04: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0',
  },
  button05: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '20px',
  },
  caption01: {
    fontSize: '14px',
    fontWeight: 400,
  },
  caption02: {
    fontSize: '12px',
    fontWeight: 400,
  },
  caption03: {
    fontSize: '14px',
    fontWeight: 400,
  },
  caption04: {
    fontSize: '15px',
    fontWeight: 300,
  },
  caption05: {
    fontSize: '14px',
    fontWeight: 500,
  },
  body01: {
    fontSize: '18px',
    fontWeight: 400,
  },
  //b: font-weight: 500,
  body02: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  body03: {
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: '22px',
  },
  body04: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '18px',
  },
  // 활성화 후 font-weight: 500,
  selectBox: {
    fontSize: '16px',
    fontWeight: 400,
  },
  count01: {
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '0px',
  },
  count02: {
    fontSize: '16px',
    fontWeight: 400,
  },
  modal01: {
    fontSize: '18px',
    fontWeight: 500,
  },
  modal02: {
    fontSize: '16px',
    fontWeight: 400,
  },
};
