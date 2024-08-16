import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './user.css';
import UserDetail from './UserDetail';
import Header from '../../navbar/Header';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/auth/AuthContext';

const Dashboard = () => {
  const [allCount, setAllCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);

  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/gettask');
  };

  const handlepending = () => {
    navigate('/getpendingtask');
  };

  const handlecomplete = () => {
    navigate('/getcompletetask');
  };

  useEffect(() => {
    axios.get('https://taskmanagement-backend-97sv.onrender.com/api/getalltask', {
      headers: { Authorization: `${token}` }
    })
      .then(response => setAllCount(response.data.data.length))
      .catch(error => console.error('Error fetching all data:', error));


    axios.get('https://taskmanagement-backend-97sv.onrender.com/api/getpendingtask', {
      headers: { Authorization: `${token}` }
    })
      .then(response => setPendingCount(response.data.data.length))
      .catch(error => console.error('Error fetching pending data:', error));


    axios.get('https://taskmanagement-backend-97sv.onrender.com/api/getcompletetask', {
      headers: { Authorization: `${token}` }
    })
      .then(response => setCompleteCount(response.data.data.length))
      .catch(error => console.error('Error fetching complete data:', error));
  }, [token]);

  return (
    <>
      <Header />
      <h1 style={{ textAlign: 'center', color: "voilet" }}><b>User Dashboard</b></h1>

      <UserDetail />
      <br />

      {/* <h1 style={{ textAlign: 'center', color: "blue" }}>Dashboard</h1> */}

      <div className="dashboard-container">
        <div className="dashboard-box box-all" onClick={handleRedirect}>
          <h2>All Tasks</h2>
          <h3><b>{allCount}</b></h3>
        </div>
        <div className="dashboard-box box-pending" onClick={handlepending}>
          <h2>Pending Tasks</h2>
          <h3><b>{pendingCount}</b></h3>
        </div>
        <div className="dashboard-box box-complete" onClick={handlecomplete}>
          <h2>Completed Tasks</h2>
          <h3><b>{completeCount}</b></h3>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
