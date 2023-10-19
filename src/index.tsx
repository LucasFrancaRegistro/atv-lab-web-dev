import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ViewMega from './App';
import GetMegaRes from './services/api';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);