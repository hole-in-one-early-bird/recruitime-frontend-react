import colors from 'shared/styles/color';
import { css } from 'styled-components';

const primaryCommonStyles = css`
  padding: 18px;
  border-radius: 10px;
`;

export const variantStyles = {
  // 기본 버튼
  primary: css`
    width: 100%;
    max-width: 440px;
    ${primaryCommonStyles}
    background-color: ${colors.blue[500]};
    color: ${colors.white};
  `,
  // 입력 버튼 - inactive
  confirm: css`
    ${primaryCommonStyles}
    background-color: ${colors.blue[400]};
    color: ${colors.white};
  `,
  // 활성화 버튼
  active: css`
    ${primaryCommonStyles}
    background-color: ${colors.blue[100]};
    border: 1px solid ${colors.blue[400]};
    color: ${colors.blue[600]};
  `,
  inactive: css`
    ${primaryCommonStyles}
    background-color: ${colors.gray[50]};
    color: ${colors.gray[500]};
  `,
  primaryDisabled: css`
    ${primaryCommonStyles}
    background-color: ${colors.gray[200]};
    color: ${colors.gray[400]};
  `,
  cancel: css`
    ${primaryCommonStyles}
    border: 1px solid #E0E0E0;
    color: #838383;
  `,
};