import { EducationForm } from 'features/aiCareer/education/ui/EducationForm';
import React from 'react';
import styled from 'styled-components';

export const Education = () => {
  return (
    <EducationWrapper>
      <EducationForm />
    </EducationWrapper>
  );
};

const EducationWrapper = styled.div``;
