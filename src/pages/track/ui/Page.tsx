import { TrackForm } from 'features/aiCareer/track/ui/Track';
import React from 'react';
import styled from 'styled-components';

export const Track = () => {
  return (
    <TrackWrapper>
      <TrackForm />
    </TrackWrapper>
  );
};

const TrackWrapper = styled.div``;
