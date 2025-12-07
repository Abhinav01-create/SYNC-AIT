import React from 'react'
import MainContent from "../components/MainContent";
import Login from "../pages/Auth/Login";
import Clubs from '../sections/Clubs/Clubs'
import { Routes, Route } from "react-router-dom";
const PublicRoutes = () => {
  return (
    <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path='/clubs' element={<Clubs/>}/>
              <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default PublicRoutes