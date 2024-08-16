// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../components/auth/AuthContext';

// const ProtectedRoute = ({ element: Component }) => {
//   const { token } = useContext(AuthContext);

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Component />;
// };

// export default ProtectedRoute;


// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../components/auth/AuthContext';

// const ProtectedRoute = ({ element: Component }) => {
//   const { token } = useContext(AuthContext);

//   // If token is not available, redirect to the login page
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   // If token is available, render the protected component
//   return <Component />;
// };

// export default ProtectedRoute;




import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
  const token = localStorage.getItem('token');
  return token ? <Component /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
