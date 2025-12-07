import React from 'react'
import { useLocation, Navigate } from 'react-router-dom';

const TePanel = () => {
  const location = useLocation();

  if (!location.state?.fromLogin) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>TePanel</div>
  )
}

export default TePanel