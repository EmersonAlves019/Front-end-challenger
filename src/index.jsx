import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/global/index';
import { StoreProvider } from './context/hooks/storeContext/index';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <StoreProvider>
    <GlobalStyles />
    <App />
  </StoreProvider>,
);
