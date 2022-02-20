import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export default function Toolcard( {text, description , icon, available, link} ) {
  return (
    <div className="card" data-available={available}>
      <div className="card-name">
        <Link to={link}>
          {text} <span className='material-icons'>{icon}</span>
        </Link>
      </div>
      <div className="card-description">{description}</div>
      <div className="card-available">{available ? '' : 'Currently under work, Will be updated soon'}</div>
    </div>
  )
}
