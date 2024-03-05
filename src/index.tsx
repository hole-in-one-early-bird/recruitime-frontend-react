import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from 'shared/styles/globalStyles';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
