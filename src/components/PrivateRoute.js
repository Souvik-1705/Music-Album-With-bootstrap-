
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../store/AuthContext';

const PrivateRoute = ({ children }) => {
  const authCtx = useContext(AuthContext);

  if (!authCtx.token) {
    
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
