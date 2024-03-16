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
        <Typography variant={'mainTitle03'} style={{ color: colors.gray[800], marginBottom: '6px' }}>
          {titleChildren}
        </Typography>
        <Typography variant={'subTitle02'} style={{ color: colors.gray[600] }}>
          {subChildren}
        </Typography>
      </div>
      <img src={process.env.PUBLIC_URL + `/images/${src}.svg`} alt={alt} />
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
    width: 120px;
    margin-top: 47px;
  }
`;
