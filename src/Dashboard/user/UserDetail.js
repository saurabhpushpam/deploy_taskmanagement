import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Admin.css';
import { AuthContext } from '../../components/auth/AuthContext';

const UserDetail = () => {
  const [user, setUser] = useState([]);
  // const [profileImage, setProfileImage] = useState('');


  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!token) {
          console.error('No token found');
          return;
        }

        //         // Fetch user data using the token from context
        const response = await axios.get('https://taskmanagement-backend-97sv.onrender.com/api/getuserdatabytoken', {
          headers: { Authorization: `${token}` }
        });

        const userData = response.data.data;
        setUser(userData);

        //   // Extract user ID
        // const userId = userData._id;

        //   // Set profile image using the user ID
        //   // setProfileImage(https://taskmanagement-backend-97sv.onrender.com/api/profileimg/${userId});

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [token]); // Add token as a dependency

  if (!user) {
    return <p>Loading...</p>;
  }

  const { name, email, } = user;

  return (
    <div className="user-profile">

      <div className="user-profile-details">
        <h2>{name}</h2>
        {email && (
          <p><b>Email: </b>{email}</p>
        )}

      </div>
    </div>
  );
};

export default UserDetail;