import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);


