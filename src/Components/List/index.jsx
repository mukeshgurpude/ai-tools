import React from 'react'
import { NavLink } from 'react-router-dom'

export default function List( {text, available, link='#'} ) {
  return (
    <li>
      {available?
        <NavLink to={link} children={text} />
        :
        text
      }</li>
  )
}
