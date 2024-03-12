import React from 'react';
import colors from 'shared/styles/color';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

type AIInteractiveProps = {
  titleChildren: string;
  subChildren: string;
  alt: string;
  src: string;
  onClick?: () => void;
};

export const AIInteractive = ({ titleChildren, subChildren, alt, src, onClick }: AIInteractiveProps) => {
  return (
    <AIInteractiveWrapper onClick={onClick}>
      <div className='title'>
        <Typography variant={'title3'}>{titleChildren}</Typography>
        <Typography variant={'subtitle2'}>{subChildren}</Typography>
      </div>
      <img src={process.env.PUBLIC_URL + `/images/${src}.png`} alt={alt} />
    </AIInteractiveWrapper>
  );
};

const AIInteractiveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${colors.blue[50]};
  padding: 24px;
  img {
    margin-top: 47px;
  }
`;
