import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import auth0Config from '../auth0Config.json';
import './RegisterPage.css';

export const RegisterPage = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated
    ? <CompleteRegistration />
    : <LoginButton />
}

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Register with Auth0</button>;
};

const CompleteRegistration = () => {
  /* Based on: https://auth0.com/docs/quickstart/spa/react/02-calling-an-api */
  const { user, isAuthenticated, isLoading, logout, getAccessTokenSilently } = useAuth0();

  const [userId, setUserId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [postalAddress, setPostalAddress] = useState<string>('');

  const [accessToken, setAccessToken] = useState<string>('');

  useEffect(() => {
    const getUserDetails = async () => {
      const domain = auth0Config.domain;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: 'read:current_user',
          },
        });
        setAccessToken(accessToken);

        const userDetails = await fetch(`https://${domain}/api/v2/users/${user?.sub}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_id, given_name, family_name, email } = await userDetails.json();
        setUserId(user_id);
        setName(given_name);
        setSurname(family_name);
        setEmailAddress(email);
      } catch (e) {
        console.log('Failed to fetch the user details', e);
        /* TODO: Handle error */
      }
    };

    getUserDetails();
  }, [getAccessTokenSilently, user?.sub]);

  const completeRegistration = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ userId, name, surname, emailAddress, postalAddress }),
      };

      fetch('/api/private/registration', payload)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch(e => { console.log(e) });

      e.preventDefault();
    } catch (error) {
      console.log("Failed to fetch access token", error);
      /* TODO: Handle error */
    }
  }

  if (isLoading) {
    return <div>Please wait while fetching the data</div>;
  }

  if (!isAuthenticated || !user) {
    return <div>Not authenticated!</div>;
  }

  return (
    <form>
      <h3>Please complete the registration</h3>
      <div>
        <input
          type='text'
          name='Name'
          placeholder='Mary'
          value={name}
          onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <input
          type='text'
          name='Surname'
          placeholder='Smith'
          value={surname}
          onChange={e => setSurname(e.target.value)} />
      </div>
      <div>
        <input
          type='email'
          name='Email'
          placeholder='marysmith@email.com'
          value={emailAddress}
          onChange={e => setEmailAddress(e.target.value)} />
      </div>
      <div>
        <input
          type='text'
          name='Address'
          placeholder='201 Main Street'
          value={postalAddress}
          onChange={e => setPostalAddress(e.target.value)} />
      </div>
      <div>
        <button onClick={(e) => completeRegistration(e)}>Complete</button>
        <button className="danger" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Cancel</button>
      </div>
    </form>
  )
};
