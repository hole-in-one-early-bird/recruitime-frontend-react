import React, { useState } from 'react';
import colors from 'shared/styles/color';
import { common } from 'shared/styles/common';
import styled, { css } from 'styled-components';
import { Typography } from '../typography/Typography';

interface SelectTypeProps {
  className?: string;
  options: string[];
  onSelect: (selected: string) => void;
  selected: string;
  label?: string;
}

export const SelectType: React.FC<SelectTypeProps> = ({
  className,
  options,
  onSelect,
  selected,
  label,
}) => {
  return (
    <SelectTypeWrapper className={className}>
      {label && (
        <Label>
          <Typography variant={'label'}>{label}</Typography>
        </Label>
      )}
      <SelectButtonBox>
        {options.map((option) => (
          <SelectButton key={option} selected={selected === option} onClick={() => onSelect(option)}>
            {option}
          </SelectButton>
        ))}
      </SelectButtonBox>
    </SelectTypeWrapper>
  );
};

const SelectTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const SelectButton = styled.button<{ selected: boolean }>`
  flex: 1 1 auto;
  padding: 18px;
  background-color: ${colors.gray[50]};
  border-radius: 10px;
  cursor: pointer;
  min-width: 110px;
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${colors.blue[100]};
      color: ${colors.blue[600]};
      border: 1.5px solid ${colors.blue[400]};
    `}
`;
