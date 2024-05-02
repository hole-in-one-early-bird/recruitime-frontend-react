import axios from 'axios';
import { API } from 'config';
import { getAuthTokenFromCookie } from 'features/auth/api/authService';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import colors from 'shared/styles/color';
import { common } from 'shared/styles/common';
import { Typography } from 'shared/ui/typography/Typography';
import useBookmarkStore from 'shared/zustand/bookmarkStore';
import styled from 'styled-components';

export const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState<
    { book: string; link: string; code: string; isCheck: boolean }[]
  >([]);

  const deleteBookmark = async (code: string) => {
    console.log(code);
    const token = getAuthTokenFromCookie();
    try {
      const result = await axios.delete(API.BOOKMARK, {
        data: {
          code: code,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBookmarks((prevBookmarks) => prevBookmarks.filter((bookmark) => bookmark.code !== code));
    } catch (err) {
      console.error('Failed to delete bookmark: ', err);
    }
  };
  useEffect(() => {
    console.log(bookmarks);
    const getBookmark = async () => {
      const token = getAuthTokenFromCookie();
      try {
        const response = await axios.get(API.BOOKMARK, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const newBookmarks = response.data.data.bookmarks.map(
          (bookmark: { jobName: string; code: string }) => ({
            book: bookmark.jobName,
            // 나중에 주소 수정
            link: `http://49.50.166.153:8080/customizedCareer?code=${bookmark.code}`,
            code: bookmark.code,
            isCheck: true,
          })
        );
        setBookmarks(newBookmarks);
      } catch (err) {
        console.error('Failed to fetch bookmarks: ', err);
      }
    };
    getBookmark();
  }, []);

  return (
    <BookmarkContainer>
      <BookmarkList>
        {bookmarks.length > 0 ? (
          bookmarks.map(
            (item, index) =>
              // isCheck가 true일 때만 렌더링
              item.isCheck && (
                <Content key={index}>
                  <Link to={item.link}>
                    <Typography variant={'body02'} style={{ color: colors.gray[700] }}>
                      {item.book}
                    </Typography>
                  </Link>
                  <div onClick={() => deleteBookmark(item.code)}>
                    <img src={'/images/icon/activeBookmarkIcon.svg'} alt='activeBookmarkIcon' />
                  </div>
                </Content>
              )
          )
        ) : (
          <EmptyBox>
            <img src={'/images/char/listRecruitime.svg'} alt='characterImage' />
            <Typography variant={'caption04'} style={{ color: colors.gray[400] }}>
              아직 북마크한 리쥬메가 없어요!
            </Typography>
          </EmptyBox>
        )}
      </BookmarkList>
    </BookmarkContainer>
  );
};

const BookmarkContainer = styled.div`
  margin-top: 16px;
  img {
    cursor: pointer;
  }
`;
const BookmarkList = styled.div``;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.blue[50]};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 8px;
`;

const EmptyBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${common.flexCenterColumn}
  gap: 7px;
`;
