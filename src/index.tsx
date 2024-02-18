import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalContextProvider } from '@contexts/ModalContext';
import FullScreenMessage from '@shared/FullScreenMessage';

import './scss/global.scss';

const queryClient = new QueryClient({});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <Suspense fallback={<FullScreenMessage type="loading" />}>
          <App />
        </Suspense>
      </ModalContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
