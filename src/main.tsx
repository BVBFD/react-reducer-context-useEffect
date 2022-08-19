import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ContextProvider } from './Context/Context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* ContextAPI */}
      <ContextProvider>
        <App />
      </ContextProvider>
      {/* ContextAPI */}
    </BrowserRouter>
  </React.StrictMode>
);
