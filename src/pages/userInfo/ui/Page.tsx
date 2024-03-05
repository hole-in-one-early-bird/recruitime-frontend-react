import { useAge } from 'features/userInfo/@hooks/useAge';
import { useEducation } from 'features/userInfo/@hooks/useEducation';
import { useExperienceList } from 'features/userInfo/@hooks/useExperienceList';
import { useGender } from 'features/userInfo/@hooks/useGender';
import useName from 'features/userInfo/@hooks/useName';
import { Education } from 'features/userInfo/education/ui/Education';
import { Experience } from 'features/userInfo/experience/ui/Experience';
import { Profile } from 'features/userInfo/profile/ui/Profile';
import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/button/Button';

import styled from 'styled-components';

export const UserInfo = () => {
  const [isProfileComplete, setProfileComplete] = useState(false);
  const [isEducationComplete, setEducationComplete] = useState(false);
  const [isExperienceComplete, setExperienceComplete] = useState(false);

  const [name] = useName('');
  const { gender } = useGender('');
  const { age } = useAge('');
  const { education } = useEducation('');
  const { experiences } = useExperienceList();

  useEffect(() => {
    const checkProfileComplete = name !== '' && gender !== '' && age !== '';
    const checkEducationComplete = education !== '';
    const checkExperienceComplete = experiences.length > 0;

    setProfileComplete(checkProfileComplete);
    setEducationComplete(checkEducationComplete);
    setExperienceComplete(checkExperienceComplete);
  }, [name, gender, age, education, experiences]);

  const isAllDataComplete = isProfileComplete && isEducationComplete && isExperienceComplete;

  return (
    <UserInfoWrapper>
      <Profile />
      <Education />
      <Experience />
      <Button
        type='submit'
        variant={isAllDataComplete ? 'primary' : 'primaryDisabled'}
        disabled={!isAllDataComplete}
      >
        프로필 저장하기
      </Button>
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div``;
