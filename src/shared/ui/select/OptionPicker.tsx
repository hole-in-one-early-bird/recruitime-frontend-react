import React, { useEffect } from 'react';
import colors from 'shared/styles/color';
import styled from 'styled-components';
import { Typography } from '../typography/Typography';

interface OptionPickerProps {
  label?: string;
  onClick?: () => void;
  selectedOption?: string; // 선택된 옵션을 추가합니다.
  children: string;
}

export const OptionPicker: React.FC<OptionPickerProps> = ({
  label,
  onClick,
  selectedOption,
  children,
}) => {
  return (
    <OptionPickerWrapper>
      {label && (
        <Label>
          <StyledTypography variant={'label'}>{label}</StyledTypography>
        </Label>
      )}

      <OptionPickerBox onClick={onClick} isSelected={!!selectedOption}>
        <Typography
          variant={'selectBox'}
          style={{ color: selectedOption ? colors.blue[400] : colors.gray[300] }}
        >
          {selectedOption || children}
        </Typography>
        <img
          src={process.env.PUBLIC_URL + `/images/icon/${selectedOption ? 'upIcon' : 'downIcon'}.png`}
          alt='icon'
        />
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

const OptionPickerBox = styled.div<{ isSelected: boolean }>`
  display: inline-flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  margin-bottom: 36px;
  border: 1px solid ${(props) => (props.isSelected ? colors.blue[400] : colors.gray[300])};
  border-radius: 10px;
  cursor: pointer;
`;
