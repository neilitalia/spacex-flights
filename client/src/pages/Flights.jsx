import React from 'react'
import './Flights.css'
import Search from '../icons/Search'

const Flights = () => {
  return (
    <div className="Flights">
      <h1>Search for flights</h1>
      <input type="text" placeholder="Where from?" className="input-origin"/>
      <input type="text" placeholder="Where to?" className="input-destination"/>
      <button className="search-button"><Search />Search</button>
    </div>
  )
}

export default Flights
