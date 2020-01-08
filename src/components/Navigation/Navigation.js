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
          <Link to='/regestration'>Regestration</Link>
        </li>
        {/* <li>
          <Link to='/formik'>Formik</Link>
        </li> */}
      </ul>
    </header>
  )
}

export default Navigation
