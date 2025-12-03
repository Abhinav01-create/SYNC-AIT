import React from 'react'
import './Loader.css'

export default function Loader() {
  return (
    <div className="loader-container">
      <img src="/loader.gif" alt="Loading" className="loader-gif" />
    </div>
  )
}
