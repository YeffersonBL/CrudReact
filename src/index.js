import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Asegúrate de tener este archivo en la carpeta `src`
import App from './App'; // Asegúrate de que App.js exista también

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
