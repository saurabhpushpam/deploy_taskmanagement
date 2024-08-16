

import React, { useContext } from 'react';
import './logout.css';
import { AuthContext } from '../../components/auth/AuthContext';
import UserDetail from '../user/UserDetail';

function Logout() {

  const { removeToken } = useContext(AuthContext);

  const handleYesClick = () => {

    removeToken();

    window.location.href = '/login';
  };

  const handleNoClick = () => {

    window.location.href = '/';
  };

  return (
    <>
      <UserDetail></UserDetail>
      <div className="logout-container">
        <h1 className="logout-title">Are you sure you want to log out?</h1>
        <div className="button-container">
          <button className="logout-button" onClick={handleYesClick}>Yes</button>
          <button className="logout-button" onClick={handleNoClick}>No</button>
        </div>
      </div>
    </>
  );
}

export default Logout;