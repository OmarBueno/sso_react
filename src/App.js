import React, { useEffect, useState } from 'react';
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import { Client } from '@microsoft/microsoft-graph-client';
import './App.css';

function App() {
  const { instance, accounts } = useMsal();
  const [profile, setProfile] = useState(null);

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch(err => console.error(err));
  };

  useEffect(() => {
    if (accounts.length > 0) {
      const accessTokenRequest = { ...loginRequest, account: accounts[0] };
      instance.acquireTokenSilent(accessTokenRequest)
        .then(({ accessToken }) => {
          const client = Client.init({
            authProvider: (done) => done(null, accessToken)
          });
          return client
            .api('/me')
            .select('displayName,mail,mailNickname,employeeId,jobTitle')
            .get();
        })
        .then(user => setProfile(user))
        .catch(err => console.error(err));
    }
  }, [accounts, instance]);

  return (
    <div className="container">
      <UnauthenticatedTemplate>
        <div className="login">
          <h2>Bienvenido</h2>
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        {profile && (
          <div className="card">
            <div className="icon">👤</div>
            <div className="details">
              <p><strong>Nombre:</strong> {profile.displayName}</p>
              <p><strong>Email:</strong> {profile.mail}</p>
              <p><strong>Mail Nickname:</strong> {profile.mailNickname}</p>
              <p><strong>Employee ID:</strong> {profile.employeeId}</p>
              <p><strong>Título:</strong> {profile.jobTitle}</p>
            </div>
          </div>
        )}
      </AuthenticatedTemplate>
    </div>
  );
}

export default App;
