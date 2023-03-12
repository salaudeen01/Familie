import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { RootState } from '../../stores/store';

const PrivateRoute = () => {
  const token = useSelector((state: RootState) => state.auth.token)

  if (!token) {
    return <Navigate to="/login" />;
  }
//   return children
}

export default PrivateRoute
