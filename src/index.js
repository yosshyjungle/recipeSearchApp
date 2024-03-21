import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import AppCount from './AppCount';
import AppEffect from './AppEffect';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppCount /> */}
    <AppEffect />
  </React.StrictMode>
);

