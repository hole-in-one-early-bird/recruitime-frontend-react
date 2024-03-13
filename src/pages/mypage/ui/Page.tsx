import { useUserData } from 'features/aiCareer/@hooks/useUserData';
import React from 'react';
import { initialValues } from 'shared/constants/data';
import colors from 'shared/styles/color';
import { common } from 'shared/styles/common';
import styled from 'styled-components';

export const Mypage = () => {
  const list = {
    profile: { title: '프로필 수정', link: '' },
    career: { title: '나의 추천 커리어', link: '' },
    resume: { title: '나의 이력서', link: '' },
    jobPosting: { title: '나의 채용공고', link: '' },
  };
  const { userDataStore } = useUserData(initialValues);

  return (
    <MypageWrapper>
      <ProfileBox>
        <div>로그인 정보</div>
        <Profile>
          <ProfileImg>
            <img src={process.env.PUBLIC_URL + '/images/char/recruitime.png'} alt='recruitime' />
          </ProfileImg>
          <ProfileInfo>
            <div>최주희</div>
            <div>email</div>
          </ProfileInfo>
        </Profile>
      </ProfileBox>

      <MenuBox>
        <Content>
          <div>프로필 수정</div>
          <img src={`${process.env.PUBLIC_URL}/images/icon/rightArrowIcon.png`} alt='arrowIcon' />
        </Content>
      </MenuBox>
    </MypageWrapper>
  );
};

const MypageWrapper = styled.div`
  margin-top: 36px;
`;
const ProfileBox = styled.div`
  margin-bottom: 29px;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: 20px 21px;
  border: 1px solid ${colors.gray[200]};
  border-radius: 10px;
`;
const ProfileImg = styled.div`
  width: 48px;
  margin-right: 12px;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const MenuBox = styled.div``;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.blue[50]};
  padding: 20px;
  border-radius: 10px;
`;
