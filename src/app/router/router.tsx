import { BaseLayout } from 'app/layouts/baseLayout';
import { Chat } from 'pages/chat';
import { CustomizedCareer } from 'pages/customizedCareer';
import { FindAccountPage } from 'pages/findAccount';
import { Home } from 'pages/home';
import { Intro } from 'pages/intro';
import { Mypage } from 'pages/mypage';
import { SigninPage } from 'pages/signin';
import { SignupPage } from 'pages/signup';
import { SignupSuccessPage } from 'pages/signupSuccess';
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
        path: ROUTES_PATH.signupSuccess,
        element: <SignupSuccessPage />,
      },
      {
        path: ROUTES_PATH.profile,
        element: <UserInfo />,
      },
      {
        path: ROUTES_PATH.track,
        element: '',
      },
      {
        path: ROUTES_PATH.education,
        element: '',
      },
      {
        path: ROUTES_PATH.experience,
        element: '',
      },
      {
        path: ROUTES_PATH.keyword,
        element: '',
      },
      {
        path: ROUTES_PATH.loading,
        element: '',
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
        element: '',
      },
    ],
  },
]);
