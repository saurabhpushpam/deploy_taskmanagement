import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './header.css';
// import House_Logo from '../images/House_Logo.png'
import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'




const Header = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [usertype, setusertype] = useState('');


  useEffect(() => {
    const fetchUserData = async () => {
      try {

        const token = localStorage.getItem('token');

        const usertypedata = localStorage.getItem('usertype');
        setusertype(usertypedata);

        if (!token) {
          console.error('No token found');
          return;
        }

        // // Fetch user data using the token
        // const response = await axios.get('http://localhost:5000/api/getuserdatabytoken', {
        //   headers: { Authorization: `${token}` }
        // });

        // const userData = response.data.data;
        // setUser(userData);
        // console.log('userdata', userData.usertype);

        // Extract user ID
        // const usertype = userData.usertype;


      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);


  // const handleUserIconClick = () => {
  //   if (user) {
  //     if (user.usertype === 'admin') {
  //       navigate('/user');
  //     } else {
  //       navigate('/userdetail');
  //     }
  //   } else {
  //     console.error('User data is not available');
  //   }
  // };


  const handleUserIconClick = () => {
    if (usertype) {
      if (usertype === 'admin') {
        navigate('/user');
      } else {
        navigate('/userdetail');
      }
    } else {
      console.error('User data is not available');
    }
  };





  const handlenavigate = () => {
    navigate('/');
  }

  return (
    <>
      <div className='head-top'>
        <div className='head-container'>

          <div className='head-logo' onClick={handlenavigate}>

            <p className='head-title'>Tasker</p>

          </div>

          <div className='head-link'>


            <Link className='head-link-title' to={"/"}>Home</Link>
            <Link className='head-link-title' to={"/dashboard"}>Dashboard</Link>
            {/* <Link className='head-link-title' to={"/"}>Logout</Link> */}


          </div>

          <div className='head-symbol'>
            <Link className='head-link-title' to={"/logout"}>Logout</Link>


          </div>

        </div>

      </div>


    </>
  )
}

export default Header


