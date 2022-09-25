import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LottoProvider from './components/store/LottoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LottoProvider>
    <App />
  </LottoProvider>
);
