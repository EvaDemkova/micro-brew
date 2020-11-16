import React from 'react'
import { Link } from 'react-router-dom'

import './styles/header.scss'

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/feed'>Feed</Link>
        </li>
        <li>
          <Link to='/map'>Map</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/'>Disconnect</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
