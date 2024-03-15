import axios from 'axios';
import { API } from 'config';
import { useUserData } from 'features/aiCareer/@hooks/useUserData';
import { getAuthTokenFromCookie } from 'features/auth/api/authService';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initialValues } from 'shared/constants/data';
import { ROUTES_PATH } from 'shared/constants/routes';
import colors from 'shared/styles/color';
import { common } from 'shared/styles/common';
import { PopupModal } from 'shared/ui/modal/Modal';
import { Typography } from 'shared/ui/typography/Typography';
import styled from 'styled-components';

export const Mypage = () => {
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const navigate = useNavigate();
  const list = {
    profile: { title: '프로필 수정', link: '' },
    career: { title: '나의 추천 커리어', link: '' },
    resume: { title: '나의 이력서', link: '' },
    jobPosting: { title: '나의 채용공고', link: '' },
  };
  const getProfileData = async () => {
    try {
      const token = getAuthTokenFromCookie();
      const response = await axios.get(`${API.GETUSERINFO}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo({
        name: response.data.data.name,
        email: response.data.data.email,
      });
    } catch (error) {
      console.error('프로필 데이터를 가져오는 중에 오류가 발생했습니다:', error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);
  const deleteAuthTokenFromCookie = () => {
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/');
  };

  const handleLogout = () => {
    setIsLogoutClicked(true);
  };

  const handleCloseModal = () => {
    setIsLogoutClicked(false);
  };
  const handleYesClick = () => {
    deleteAuthTokenFromCookie(); // 쿠키에서 토큰 삭제
  };

  const handleNoClick = () => {
    setIsLogoutClicked(false);
  };
  return (
    <MypageWrapper>
      <div>
        <ProfileBox>
          <Typography variant={'subTitle01'} style={{ color: colors.gray[800] }}>
            로그인 정보
          </Typography>

          <Profile>
            <ProfileImg>
              <img src={process.env.PUBLIC_URL + '/images/char/recruitime.png'} alt='recruitime' />
            </ProfileImg>
            <ProfileInfo>
              <Typography variant={'body01'} style={{ color: colors.gray[800] }}>
                {userInfo.name}
              </Typography>
              <Typography variant={'caption03'} style={{ color: colors.gray[600] }}>
                {userInfo.email}
              </Typography>
            </ProfileInfo>
          </Profile>
        </ProfileBox>
        <MenuBox>
          <Link to={ROUTES_PATH.editUserInfo}>
            <Content>
              <Typography variant={'body02'} style={{ color: colors.gray[700] }}>
                프로필 수정
              </Typography>
              <img src={`${process.env.PUBLIC_URL}/images/icon/rightArrowIcon.png`} alt='arrowIcon' />
            </Content>
          </Link>
        </MenuBox>
      </div>

      <CenteredLogout onClick={handleLogout}>
        <StyledTypography variant={'caption01'} style={{ color: colors.gray[400] }}>
          로그아웃
        </StyledTypography>
      </CenteredLogout>
      {isLogoutClicked && (
        <PopupModal
          isOpen={isLogoutClicked}
          onClose={handleCloseModal}
          content1={'로그아웃 하시겠습니까?'}
          onClickYes={handleYesClick}
          onClickNo={handleNoClick}
        />
      )}
    </MypageWrapper>
  );
};

const MypageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const StyledTypography = styled(Typography)`
  border-bottom: 1px solid ${colors.gray[400]};
`;

const CenteredLogout = styled.div`
  width: 50px;
  margin: 0 auto;
  cursor: pointer;
  margin-bottom: 20px;
`;

export default Mypage;
