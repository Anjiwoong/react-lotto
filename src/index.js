import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LottoContextProvider } from './components/store/lotto-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LottoContextProvider>
    <App />
  </LottoContextProvider>
);
