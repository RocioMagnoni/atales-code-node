import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css'; // si decides usar estilos globales

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
