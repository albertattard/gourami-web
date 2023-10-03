import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import auth0Config from './auth0Config.json';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Auth0Provider
    domain={auth0Config.domain}
    clientId={auth0Config.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: auth0Config.audience,
      scope: 'read:current_user',
    }}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
