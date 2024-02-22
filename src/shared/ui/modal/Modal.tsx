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
}

interface OptionProps {
  isSelected: boolean;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onSelect, selected, options, label, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);
  if (!isOpen) return null;
  const modalContent = (
    <Overlay onClick={onClose}>
      <ModalWrapper>
        {label && (
          <Label>
            <Typography variant={'label'}>{label}</Typography>
          </Label>
        )}
        <OptionBox>
          {options &&
            onSelect &&
            options.map((option) => (
              <Option key={option} onClick={() => onSelect(option)} isSelected={selected === option}>
                <Typography variant={'selectList'}>{option}</Typography>
              </Option>
            ))}
        </OptionBox>
      </ModalWrapper>
    </Overlay>
  );
  return ReactDOM.createPortal(modalContent, document.body);
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

const OptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Option = styled.div<OptionProps>`
  padding: 10px;
  color: ${({ isSelected }) => (isSelected ? colors.blue[400] : 'inherit')};
  cursor: pointer;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 20px;
`;
