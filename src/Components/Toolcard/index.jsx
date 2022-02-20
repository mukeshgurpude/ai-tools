import React from 'react'
import './style.scss'

export default function Toolcard( {text, description , icon, available} ) {
  return (
    <div className="card">
      <div className="card-name">{text}</div>
      <div className="card-description">{description}</div>
      <div className="card-icon"><i className={`fa ${icon}`}></i></div>
      <div className="card-available">{available ? '' : 'Currently under work, Will be updated soon'}</div>
    </div>
  )
}
