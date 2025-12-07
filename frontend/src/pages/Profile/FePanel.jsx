import React from 'react'
import { useLocation, Navigate } from 'react-router-dom';
const FePanel = () => {
  const location = useLocation();

  if (!location.state?.fromLogin) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>FePanel</div>
  )
}

export default FePanel