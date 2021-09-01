import React,{useState} from 'react'
import axios from 'axios'
import './Flights.css'
import Search from '../icons/Search'

const Flights = () => {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')

  return (
    <div className="Flights">
      <h1>Search for flights</h1>
      <input
        type="text"
        className="input-origin"
        placeholder="Where from?"
        onChange={(e)=>setOrigin(e.target.value)}
      />
      <input
        type="text"
        className="input-destination"
        placeholder="Where to?"
        onChange={(e)=>setDestination(e.target.value)}
      />
      <button className="search-button"><Search />Search</button>
    </div>
  )
}

export default Flights
