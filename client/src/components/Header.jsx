import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

const Header = (props) => {
  return (
    <header className="Header">
      <h1>One giant leap for mankind.</h1>
      <p>Our next step to becoming multi-planet species: Go where you want to go. Explore the known and unknown. Find cities terraformed to your taste. A new variety of civilizations await your arrival. </p>
      <button className="earliest-flight" onClick={props.scrollToEnd}>Join Earliest Flight</button>
      <NavLink to='/flights'>
        Explore Destinations
      </NavLink>
    </header>
  )
}

export default Header
