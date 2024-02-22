import React, { FC } from 'react';
import styled from 'styled-components';
import colors from 'shared/styles/color';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (option: string) => void;
  selected?: string;
  options?: string[];
}

interface OptionProps {
  isSelected: boolean;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSelect, selected, options }) => {
  if (!isOpen) return null;

  const modalContent = (
    <ModalWrapper>
      {options &&
        onSelect &&
        options.map((option) => (
          <Option key={option} onClick={() => onSelect(option)} isSelected={selected === option}>
            {option}
          </Option>
        ))}
      <CloseButton onClick={onClose}>닫기</CloseButton>
    </ModalWrapper>
  );
  return ReactDOM.createPortal(modalContent, document.body);
};

const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Option = styled.div<OptionProps>`
  padding: 10px;
  color: ${({ isSelected }) => (isSelected ? colors.blue[400] : 'black')};
  &:hover {
    background-color: ${colors.gray[200]};
  }
`;

const CloseButton = styled.button`
  /* 스타일 정의 */
`;
