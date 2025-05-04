import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import global from './styles/global.css'
import { AuthProvider } from "./firebase/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
