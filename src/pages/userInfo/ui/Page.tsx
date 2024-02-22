import { Education } from 'features/userInfo/education/ui/Education';
import { Experience } from 'features/userInfo/experience/ui/Experience';
import { Profile } from 'features/userInfo/profile/ui/Profile';
import React, { useState } from 'react';
import { Modal } from 'shared/ui/modal/Modal';
import styled from 'styled-components';

export const UserInfo = () => {
  const [isOpen, setIsOpen] = useState(false); // 모달의 상태를 관리하는 state를 생성합니다.

  return (
    <UserInfoWrapper>
      <Profile />
      <Education onOpenModal={() => setIsOpen(true)} /> {/* 함수를 prop으로 전달합니다. */}
      <Experience />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {/* 모달 컴포넌트를 추가하고, props를 전달합니다. */}
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div``;
