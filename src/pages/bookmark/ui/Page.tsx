import axios from 'axios';
import { API } from 'config';
import { getAuthTokenFromCookie } from 'features/auth/api/authService';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';
import colors from 'shared/styles/color';
import { Typography } from 'shared/ui/typography/Typography';
import useBookmarkStore from 'shared/zustand/bookmarkStore';
import styled from 'styled-components';

export const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState<{ book: string; link: string }[]>([]);
  // 응답 데이터를 저장할 상태
  const { bookmark, setBookmark } = useBookmarkStore();
  const handleBookmarkClick = () => {
    setBookmark(!bookmark);
  };
  const deleteBookmark = async (code: string) => {
    handleBookmarkClick();
    try {
      await axios.delete(API.BOOKMARK, {
        data: {
          code: code,
        },
      });
    } catch (err) {
      console.error('Failed to delete bookmark: ', err);
    }
  };
  useEffect(() => {
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
            link: `${window.location.href}?code=${bookmark.code}`,
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
        {bookmarks.map((item, index) => (
          <Link to={item.link} key={index}>
            <Content>
              <Typography variant={'body02'} style={{ color: colors.gray[700] }}>
                {item.book}
              </Typography>
              {bookmark ? (
                <div onClick={() => deleteBookmark(item.link)}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/icon/activeBookmarkIcon.svg'}
                    alt='inActiveBookmarkIcon'
                  />
                </div>
              ) : (
                <div>
                  <img
                    src={process.env.PUBLIC_URL + '/images/icon/inActiveBookmarkIcon.svg'}
                    alt='inActiveBookmarkIcon'
                  />
                </div>
              )}
            </Content>
          </Link>
        ))}
      </BookmarkList>
    </BookmarkContainer>
  );
};

const BookmarkContainer = styled.div`
  margin-top: 16px;
`;
const BookmarkList = styled.div``;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.blue[50]};
  padding: 20px;
  border-radius: 10px;
`;
