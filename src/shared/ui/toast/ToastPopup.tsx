import React from 'react';
import colors from 'shared/styles/color';
import styled from 'styled-components';
import { Typography } from '../typography/Typography';

export default function ToastPopup({ children }: { children: string }) {
  return (
    <ToastPopupBox>
      <Typography variant={'toast'}>{children}</Typography>
    </ToastPopupBox>
  );
}

const ToastPopupBox = styled.div`
  padding: 22px;
  border-radius: 30px;
  background-color: ${colors.blue[400]};
  text-align: center;
`;
