import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
  }

  return (
    <div>
      <div className='playerName'>Success! What would you like to do?</div>
      <Button className="site_button" onClick={() => navigate('/review')}>
        Review
      </Button>
      <Button className="site_button" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
