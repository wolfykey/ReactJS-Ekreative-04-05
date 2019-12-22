import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
  return (
    <header className='header'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/user'>User</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </header>
  )
}

export default Navigation
