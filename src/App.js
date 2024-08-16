
// import React, { useContext } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import './App.css';

// import Register from './RegisterLogin/Register';
// import Login from './RegisterLogin/Login';
// import Header from './navbar/Header';
// import UserDetail from './Dashboard/user/UserDetail';
// import Logout from './Dashboard/logout/Logout';
// import UserLogout from './Dashboard/logout/UserLogout';
// import Dashboard from './Dashboard/user/Dashboard';
// import ProtectedRoute from './Routes/ProtectedRoute';
// import { AuthContext } from './components/auth/AuthContext';
// import TaskForm from './components/Task/TaskForm';
// import GetTask from './components/Task/GetTask';
// import UpdateTask from './components/Task/UpdateTask';
// import EditTask from './components/Task/EditTask';
// import GetCompleteTask from './components/Task/GetCompleteTask';
// import GetPendingTask from './components/Task/GetPendingTask';



// function App() {
//   const { token } = useContext(AuthContext);

//   return (
//     <>


//       {/* <Header /> */}
//       <Routes>


//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="*" element={<Navigate to="/login" replace />} />
//         <Route path="/" element={<TaskForm />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/user-detail" element={<UserDetail />} />
//         <Route path="/logout" element={<UserLogout />} />
//         <Route path="/addtask" element={<TaskForm />} />
//         <Route path="/gettask" element={<GetTask />} />

//         <Route path="/getcompletetask" element={<GetCompleteTask />} />
//         <Route path="/getpendingtask" element={<GetPendingTask />} />

//         <Route path="/edittask/:id" element={<EditTask />} />
//         <Route path="/updatetask" element={<UpdateTask />} />
//         <Route path="*" element={<Navigate to="/" replace />} />


//       </Routes>
//     </>
//   );
// }

// export default App;





// import React, { useContext } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import './App.css';

// import Register from './RegisterLogin/Register';
// import Login from './RegisterLogin/Login';
// import Header from './navbar/Header';
// import UserDetail from './Dashboard/user/UserDetail';
// import Logout from './Dashboard/logout/Logout';
// import UserLogout from './Dashboard/logout/UserLogout';
// import Dashboard from './Dashboard/user/Dashboard';
// import { AuthContext } from './components/auth/AuthContext';
// import TaskForm from './components/Task/TaskForm';
// import GetTask from './components/Task/GetTask';
// import UpdateTask from './components/Task/UpdateTask';
// import EditTask from './components/Task/EditTask';
// import GetCompleteTask from './components/Task/GetCompleteTask';
// import GetPendingTask from './components/Task/GetPendingTask';
// import ProtectedRoute from './Routes/ProtectedRoute';

// function App() {
//   return (
//     <>
//       {/* <Header /> */}
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route path="/" element={<ProtectedRoute element={TaskForm} />} />
//         <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
//         <Route path="/user-detail" element={<ProtectedRoute element={UserDetail} />} />
//         <Route path="/logout" element={<ProtectedRoute element={UserLogout} />} />
//         <Route path="/addtask" element={<ProtectedRoute element={TaskForm} />} />
//         <Route path="/gettask" element={<ProtectedRoute element={GetTask} />} />
//         <Route path="/getcompletetask" element={<ProtectedRoute element={GetCompleteTask} />} />
//         <Route path="/getpendingtask" element={<ProtectedRoute element={GetPendingTask} />} />
//         <Route path="/edittask/:id" element={<ProtectedRoute element={EditTask} />} />
//         <Route path="/updatetask" element={<ProtectedRoute element={UpdateTask} />} />

//         {/* Redirect any other routes to login */}
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </>
//   );
// }

// export default App;




import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Register from './RegisterLogin/Register';
import Login from './RegisterLogin/Login';
import Header from './navbar/Header';
import UserDetail from './Dashboard/user/UserDetail';
import UserLogout from './Dashboard/logout/UserLogout';
import Dashboard from './Dashboard/user/Dashboard';
import { AuthContext } from './components/auth/AuthContext';
import TaskForm from './components/Task/TaskForm';
import GetTask from './components/Task/GetTask';
import UpdateTask from './components/Task/UpdateTask';
import EditTask from './components/Task/EditTask';
import GetCompleteTask from './components/Task/GetCompleteTask';
import GetPendingTask from './components/Task/GetPendingTask';
import ProtectedRoute from './Routes/ProtectedRoute';
import PublicRoute from './Routes/PublicRoute';

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes: Only accessible when not logged in */}
        <Route path="/login" element={<PublicRoute element={Login} />} />
        <Route path="/register" element={<PublicRoute element={Register} />} />

        {/* Protected Routes: Accessible only when logged in */}
        <Route path="/" element={<ProtectedRoute element={TaskForm} />} />
        <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
        <Route path="/user-detail" element={<ProtectedRoute element={UserDetail} />} />
        <Route path="/logout" element={<ProtectedRoute element={UserLogout} />} />
        <Route path="/addtask" element={<ProtectedRoute element={TaskForm} />} />
        <Route path="/gettask" element={<ProtectedRoute element={GetTask} />} />
        <Route path="/getcompletetask" element={<ProtectedRoute element={GetCompleteTask} />} />
        <Route path="/getpendingtask" element={<ProtectedRoute element={GetPendingTask} />} />
        <Route path="/edittask/:id" element={<ProtectedRoute element={EditTask} />} />
        <Route path="/updatetask" element={<ProtectedRoute element={UpdateTask} />} />

        {/* Redirect any other routes to the dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
}

export default App;
