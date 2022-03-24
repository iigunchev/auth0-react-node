import React from 'react'

const LogoutButton = () => {
    const logout = async () => {
        const domain = 'dev-irybvkxi.us.auth0.com';
        const clientId = 'V49cUsJhXU3F76NtS14QGCgVMSbGPOe6';
        const returnTo = 'http://localhost:3000';
        
        const response = await fetch(
            `https://${domain}/logout?client_id=${clientId}&returnTo=${returnTo}`,
            { redirect: 'manual' }
        );

        window.location.replace(response.url);
    };
    
  return (
    <button className='Login-button' onclick={() => logout()}>
        Log Out
    </button>
  )
}

export default LogoutButton