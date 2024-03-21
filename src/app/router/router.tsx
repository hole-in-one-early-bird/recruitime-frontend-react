import { BaseLayout } from 'app/layouts/baseLayout';
import { Bookmark } from 'pages/bookmark';
import { Chat } from 'pages/chat';
import { CustomizedCareer } from 'pages/customizedCareer';
import { EditUserInfo } from 'pages/edituserInfo';
import { Education } from 'pages/education';
import { Experience } from 'pages/experience';
import { FindAccountPage } from 'pages/findAccount';
import { Home } from 'pages/home';
import { Intro } from 'pages/intro';
import { Keyword } from 'pages/keyword';
import { Loading } from 'pages/loading';
import { Mypage } from 'pages/mypage';
import { Profile } from 'pages/profile';
import { ResetPasswordPage } from 'pages/resetPassword';
import { SigninPage } from 'pages/signin';
import { SignupPage } from 'pages/signup';
import { SignupSuccessPage } from 'pages/signupSuccess';
import { Track } from 'pages/track';
import { UserInfo } from 'pages/userInfo';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    // errorElement: <div>error</div>,
    children: [
      {
        path: ROUTES_PATH.intro,
        element: <Intro />,
      },
      {
        path: ROUTES_PATH.home,
        element: <Home />,
      },
      {
        path: ROUTES_PATH.mypage,
        element: <Mypage />,
      },
      {
        path: ROUTES_PATH.signin,
        element: <SigninPage />,
      },
      {
        path: ROUTES_PATH.signup,
        element: <SignupPage />,
      },
      {
        path: ROUTES_PATH.findAccount,
        element: <FindAccountPage />,
      },
      {
        path: ROUTES_PATH.resetPassword,
        element: <ResetPasswordPage />,
      },
      {
        path: ROUTES_PATH.signupSuccess,
        element: <SignupSuccessPage />,
      },
      {
        path: ROUTES_PATH.userInfo,
        element: <UserInfo />,
      },
      {
        path: ROUTES_PATH.editUserInfo,
        element: <EditUserInfo />,
      },
      {
        path: ROUTES_PATH.profile,
        element: <Profile />,
      },
      {
        path: ROUTES_PATH.track,
        element: <Track />,
      },
      {
        path: ROUTES_PATH.education,
        element: <Education />,
      },
      {
        path: ROUTES_PATH.experience,
        element: <Experience />,
      },
      {
        path: ROUTES_PATH.keyword,
        element: <Keyword />,
      },
      {
        path: ROUTES_PATH.loading,
        element: <Loading />,
      },
      {
        path: ROUTES_PATH.customizedCareer,
        element: <CustomizedCareer />,
      },
      {
        path: ROUTES_PATH.chat,
        element: <Chat />,
      },
      {
        path: ROUTES_PATH.bookmark,
        element: <Bookmark />,
      },
    ],
  },
]);
