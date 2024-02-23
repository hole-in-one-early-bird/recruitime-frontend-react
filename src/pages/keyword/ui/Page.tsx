import { KeywordForm } from 'features/aiCareer/keyword/ui/KeywordForm';
import React from 'react';
import styled from 'styled-components';

export const Keyword = () => {
  return (
    <KeywordWrapper>
      <KeywordForm />
    </KeywordWrapper>
  );
};

const KeywordWrapper = styled.div``;
