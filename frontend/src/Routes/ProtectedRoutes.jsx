import React from 'react'
import TePanel from '@/pages/Profile/TePanel';
import FePanel from '@/pages/Profile/FePanel';
import SePanel from '@/pages/Profile/SePanel';

import { Routes, Route } from "react-router-dom";
const ProtectedRoutes = () => {
  return (
    <Routes>
              <Route path='/profile/Te' element={<TePanel/>}/>
              <Route path='/profile/Se' element={<SePanel/>}/>
              <Route path='/profile/Fe' element={<FePanel/>}/>
    </Routes>
  )
}

export default ProtectedRoutes