import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="Header">
      <h1>One giant leap for mankind.</h1>
      <p>Our next step to becoming multi-planet species: Go where you want to go. Explore the known and unknown. Find cities terraformed to your taste. A new variety of civilizations await your arrival. </p>
      <button className="earliest-flight">Join Earliest Flight</button>
      <button className="all-flights">Explore Destinations</button>
    </header>
  )
}

export default Header
