import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="NavBar">
      <img src="/SpaceX-Logo.png" alt="Logo" />
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/flights">Flights</NavLink></li>
        <li><NavLink to="/tickets">Tickets</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar