import React from 'react';
import colors from 'shared/styles/color';
import styled from 'styled-components';
import { Typography } from '../typography/Typography';

interface OptionPickerProps {
  label?: string;
  onClick?: () => void;
}

export const OptionPicker: React.FC<OptionPickerProps> = ({ label, onClick }) => {
  return (
    <OptionPickerWrapper>
      {label && (
        <Label>
          <StyledTypography variant={'label'}>{label}</StyledTypography>
        </Label>
      )}
      <OptionPickerBox onClick={onClick}>
        <Typography variant={'selectBox'}>학력선택</Typography>
        <img src={process.env.PUBLIC_URL + '/images/icon/downIcon.png'} alt='downIcon' />
      </OptionPickerBox>
    </OptionPickerWrapper>
  );
};

const OptionPickerWrapper = styled.div``;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;
const StyledTypography = styled(Typography)`
  flex: 0 0 auto;
`;

const OptionPickerBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 36px;
  border: 1px solid ${colors.gray[300]};
  border-radius: 10px;
  cursor: pointer;
`;
