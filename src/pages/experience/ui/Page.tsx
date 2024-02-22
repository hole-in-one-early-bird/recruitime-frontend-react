import { ExperienceForm } from 'features/aiCareer/experience/ui/ExperienceForm';
import React from 'react';
import styled from 'styled-components';

export const Experience = () => {
  return (
    <ExperienceWrapper>
      <ExperienceForm />
    </ExperienceWrapper>
  );
};

const ExperienceWrapper = styled.div``;
