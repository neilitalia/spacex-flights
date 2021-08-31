import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div class="NavBar">
      <img src="/SpaceX-Logo.png" alt="Logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Flights</li>
          <li>Tickets</li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar