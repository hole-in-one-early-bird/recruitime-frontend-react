import React, { FC, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import colors from 'shared/styles/color';
import ReactDOM from 'react-dom';
import { Typography } from '../typography/Typography';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (option: string) => void;
  selected?: string;
  options?: string[];
  label: string;
  isTwoColumns?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onSelect,
  selected,
  options,
  label,
  onClose,
  isTwoColumns,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalWrapper>
        {label && (
          <Label>
            <Typography variant={'box3'}>{label}</Typography>
          </Label>
        )}
        <OptionBox isTwoColumns={isTwoColumns}>
          {options?.map((option) => (
            <Option key={option} onClick={() => onSelect?.(option)} isSelected={selected === option}>
              <Typography
                variant={'selectList'}
                style={{ color: selected === option ? colors.blue[400] : colors.gray[500] }}
              >
                {option}
              </Typography>
            </Option>
          ))}
        </OptionBox>
      </ModalWrapper>
    </Overlay>,
    document.body
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 30px 30px 50px;
  border-radius: 20px 20px 0 0;
  background-color: ${colors.white};
`;

const OptionBox = styled.div<{ isTwoColumns?: boolean }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > div {
    width: ${({ isTwoColumns }) => (isTwoColumns ? '50%' : '100%')};
  }
`;

const Option = styled.div<{ isSelected: boolean }>`
  padding: 22px 26px 22px 0;
  color: ${({ isSelected }) => (isSelected ? colors.blue[400] : 'inherit')};
  cursor: pointer;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 20px;
`;
