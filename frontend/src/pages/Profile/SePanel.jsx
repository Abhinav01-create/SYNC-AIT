import React from 'react'
import { useLocation, Navigate } from 'react-router-dom';
const SePanel = () => {
  const location = useLocation();

  if (!location.state?.fromLogin) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>SePanel</div>
  )
}

export default SePanel