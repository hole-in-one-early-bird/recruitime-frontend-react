import React from 'react';
import colors from 'shared/styles/color';
import styled from 'styled-components';
import { Typography } from '../typography/Typography';

export default function ToastPopup({ children }: { children: string }) {
  return (
    <ToastPopupBox>
      <Typography variant={'toastButton'} style={{ color: colors.white }}>
        {children}
      </Typography>
    </ToastPopupBox>
  );
}

const ToastPopupBox = styled.div`
  padding: 20px;
  border-radius: 30px;
  background-color: ${colors.blue[400]};
  text-align: center;
`;
