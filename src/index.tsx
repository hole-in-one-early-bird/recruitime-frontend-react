import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './shared/styles/globalStyles.ts';
import App from './app/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
