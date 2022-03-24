import React from 'react'

const LoginButton = () => {
    const login = async () => {
        const domain = 'dev-irybvkxi.us.auth0.com';
        const audience = 'https://www.challenges-api.com';
        const scope = 'read:challenges';
        const clientId = 'V49cUsJhXU3F76NtS14QGCgVMSbGPOe6';
        const responseType = 'code';
        const redirectUri = 'http://localhost:3000/challenges';

        const response = fetch(
            `https://${domain}/authorize?` +
            `audience=${audience}&` +
            `scope=${scope}&` +
            `response_type=${responseType}&` +
            `client_id=${clientId}&` +
            `redirect_uri=${redirectUri}`, {
                redirect: 'manual'
            }
        );

        window.location.replace(response.url);
    };
  return (
    <button className='Login-button' onclick={() => login()}>
        Log In
    </button>
  )
}

export default LoginButton