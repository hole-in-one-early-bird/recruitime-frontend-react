import colors from 'shared/styles/color';

interface TypographyVariant {
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string;
  letterSpacing?: string;
  color?: string;
}
// headline1: "headline1",
//   headline2: "headline2",
//   bodyText: "bodyText",
//   bodyTextBold: "bodyTextBold",
//   captionText: "captionText",
//   buttonText: "buttonText",
//   pageTitle: "pageTitle",
//   subTitle: "subTitle",
//   overline: "overline",
//   errorMessage: "errorMessage",
//   navigationText: "navigationText",
//   cardTitle: "cardTitle",
//   cardContent: "cardContent",
//   listItem: "listItem",
//   sectionHeader: "sectionHeader",
//   inputText: "inputText",
//   placeholderText: "placeholderText",
//   tooltipText: "tooltipText",
//   badgeText: "badgeText",
//   highlightedText: "highlightedText",
//   calloutText: "calloutText",
//   linkText: "linkText",
//   footerText: "footerText",
//   breadcrumbText: "breadcrumbText",
//   tagText: "tagText",
//   infoText: "infoText",
//   successText: "successText",
//   warningText: "warningText",
//   errorText: "errorText"
interface TypographyVariants {
  [variant: string]: TypographyVariant;
}
// medium:500, semibold:600, bold:700, extrabold:800
export const typographyStyles: TypographyVariants = {
  headline1: {
    fontSize: '24px',
    fontWeight: 700,
    // 2%
    letterSpacing: '-0.02rem',
    lineHeight: '32px',
  },
  headline2: {
    fontSize: '16px',
    fontWeight: 400,
    // 2%
    letterSpacing: '-0.02rem',
    lineHeight: '100%',
  },
  body1: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '18px',
    letterSpacing: '-0.02em',
  },

  label: {
    color: colors.gray[800],
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },

  caption: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },

  error: {
    color: colors.error,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  // ------------------------------------
  logo: {
    fontSize: '20px',
    fontWeight: 800,
    color: colors.blue[500],
  },
  headerTitle: {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '20px',
    color: colors.gray[700],
  },
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
    color: colors.gray[800],
  },
  subtitle2: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '-0.02em',
    color: colors.gray[700],
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
  button3Active: {
    color: colors.blue[600],
    fontWeight: 600,
  },
  button4: {
    color: colors.blue[400],
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '20px',
  },
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

  caption4: {
    color: colors.gray[400],
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  // body1: {
  //   color: colors.gray[700],
  //   fontSize: '18px',
  //   fontWeight: 500,
  //   lineHeight: '1',
  //   letterSpacing: '-0.02em',
  // },
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
  body4: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '-0.16px',
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

  toast: {
    color: colors.white,
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '-0.02em',
  },
};
