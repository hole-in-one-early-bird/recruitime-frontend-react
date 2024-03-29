import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import colors from 'shared/styles/color';
import { common } from 'shared/styles/common';
import styled from 'styled-components';
import { Button } from '../button/Button';
import { Typography } from '../typography/Typography';

interface ModalProps {
  isOpen: boolean;
  onSelect?: (option: string) => void;
  selected?: string;
  options?: string[];
  label?: string;
  onClose?: () => void;
  $isTwoColumns?: boolean;
}

interface PopupModalProps extends ModalProps {
  content1?: React.ReactNode;
  content2?: React.ReactNode;
  onClickYes?: () => void | Promise<void>;
  onClickNo?: () => void | Promise<void>;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onSelect,
  selected,
  options,
  label,
  onClose,
  $isTwoColumns,
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
            <Typography variant={'modal01'} style={{ color: colors.gray[800] }}>
              {label}
            </Typography>
          </Label>
        )}
        <OptionBox $isTwoColumns={$isTwoColumns}>
          {options?.map((option) => (
            <Option key={option} onClick={() => onSelect?.(option)} $isSelected={selected === option}>
              <Typography
                variant={selected === option ? 'subTitle01' : 'subTitle02'}
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

export const PopupModal: React.FC<PopupModalProps> = ({
  isOpen,
  content1,
  content2,
  onClose,
  onClickYes,
  onClickNo,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <PopupModalWrapper>
        <TypoContainer>
          <Typography variant={'mainTitle03'} style={{ color: colors.gray[800] }} children={content1} />
          <Typography
            variant={'subTitle02'}
            children={content2}
            style={{ color: colors.gray[500], marginTop: '6px' }}
          />
        </TypoContainer>

        <ButtonContainer>
          <Button
            variant={'cancel'}
            style={{ width: '50%' }}
            onClick={onClickNo}
            TypographyVariant={'subtitle01'}
          >
            아니요
          </Button>

          <Button
            variant={'check'}
            style={{ width: '50%' }}
            onClick={onClickYes}
            TypographyVariant={'subtitle01'}
          >
            네
          </Button>
        </ButtonContainer>
      </PopupModalWrapper>
    </Overlay>,
    document.body
  );
};

export const PopupResumeModal: React.FC<PopupModalProps> = ({ isOpen, content1, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <PopupModalWrapper>
        <TypoContainer>
          <Typography variant={'mainTitle03'} style={{ color: colors.gray[800] }} children={content1} />
        </TypoContainer>
        <ButtonContainer>
          <Button
            variant={'cancel'}
            style={{ width: '50%' }}
            onClick={onClose}
            TypographyVariant={'subtitle01'}
          >
            닫기
          </Button>
        </ButtonContainer>
      </PopupModalWrapper>
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

const PopupModalWrapper = styled.div`
  width: 100%;
  max-width: 365px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 22px 30px;
  border-radius: 10px;
  background-color: ${colors.white};
  @media screen and (max-width: 480px) {
    max-width: calc(100% - 80px); /* 화면 양쪽에 각각 40px의 여백을 추가합니다. */
  }
`;

const OptionBox = styled.div<{ $isTwoColumns?: boolean }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > div {
    width: ${({ $isTwoColumns }) => ($isTwoColumns ? '50%' : '100%')};
  }
`;

const Option = styled.div<{ $isSelected: boolean }>`
  padding: 22px 26px 22px 0;
  color: ${({ $isSelected }) => ($isSelected ? colors.blue[400] : 'inherit')};
  cursor: pointer;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 20px;
`;

const TypoContainer = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 24px;
  ${common.flexCenterRow}
  gap: 9px;
`;
