import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="NavBar">
      <img src="/SpaceX-Logo.png" alt="Logo" />
      <ul>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Flights</a></li>
        <li><a>Tickets</a></li>
      </ul>
    </nav>
  )
}

export default NavBar