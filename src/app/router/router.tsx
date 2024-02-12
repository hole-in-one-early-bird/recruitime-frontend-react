import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES_PATH } from 'shared/constants/routes';

const router = createBrowserRouter([
  {
    path: ROUTES_PATH.home,
    element: '',
  },
  {
    path: ROUTES_PATH.signin,
    element: '',
  },
  {
    path: ROUTES_PATH.signup,
    element: '',
  },
  {
    path: ROUTES_PATH.profile,
    element: '',
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
    element: '',
  },
  {
    path: ROUTES_PATH.chat,
    element: '',
  },
  {
    path: ROUTES_PATH.bookmark,
    element: '',
  },
]);

export default router;
