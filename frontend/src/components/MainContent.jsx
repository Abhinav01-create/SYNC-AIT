import React from 'react'
import '../styles/site.css'
import Home from '../pages/Home/Home'
import ContactUs from '../sections/ContactUs/ContactUs'

export default function MainContent(){
  return (
    <main className="main">
      <Home />
      <ContactUs />
    </main>
  )
}