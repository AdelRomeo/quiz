import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthState from "./context/auth/authState";

ReactDOM.render(
  <>
    <AuthState>
      <App/>
    </AuthState>
  </>,
  document.getElementById('root')
);

reportWebVitals();
