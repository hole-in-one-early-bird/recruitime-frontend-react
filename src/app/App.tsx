import { SigninPage } from 'pages/signin';
import { SignupPage } from 'pages/signup';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
