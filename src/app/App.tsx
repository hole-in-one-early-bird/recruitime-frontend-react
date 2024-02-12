import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SigninPage } from 'pages/signin';
import { SignupPage } from 'pages/signup';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
