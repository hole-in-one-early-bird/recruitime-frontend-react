import React, { useEffect } from 'react';
import colors from 'shared/styles/color';
import styled, { css } from 'styled-components';
import { Button } from '../button/Button';
import { Typography } from '../typography/Typography';

interface SelectTypeProps {
  className?: string;
  options: string[];
  onSelect: (selected: string) => void;
  selected: string;
  label?: string;
  width?: string;
  style?: React.CSSProperties;
  TypographyVariant: string;
}

export const SelectType: React.FC<SelectTypeProps> = ({
  className,
  options,
  onSelect,
  selected,
  label,
  width,
  style,
  TypographyVariant,
}) => {
  return (
    <SelectTypeWrapper className={className}>
      {label && (
        <Label>
          <Typography variant={'subTitle01'} style={{ color: colors.gray[800] }}>
            {label}
          </Typography>
        </Label>
      )}
      <SelectButtonBox>
        {options.map((option) => (
          <StyledButton
            style={style}
            variant={`${selected === option ? 'active' : 'inactive'}`}
            key={option}
            selected={selected === option}
            onClick={() => onSelect(option)}
            width={width}
            TypographyVariant={TypographyVariant}
          >
            {option}
          </StyledButton>
        ))}
      </SelectButtonBox>
    </SelectTypeWrapper>
  );
};
const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const SelectTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  * {
    @media screen and (max-width: 360px) {
      padding: 10px 7px;
    }
  }
  @media screen and (max-width: 440px) {
    gap: 3px;
  }
`;

const StyledButton = styled(Button)<{ selected: boolean; width?: string }>`
  padding: 18px;
  border-radius: 10px;
  cursor: pointer;

  text-align: center;
  margin-bottom: 8px; // 줄 바꿈 후의 버튼과의 간격을 위해 추가합니다.
`;
