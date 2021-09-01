import React,{useState} from 'react'
import axios from 'axios'
import './Flights.css'
import Search from '../icons/Search'
import { API_BASE_URI } from '../globals'

const Flights = () => {
  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)

  const findFlightByOrigin = async () => {
    const flights = await axios.post(`${API_BASE_URI}/flights/findByOrigin`,{ origin: origin })
    console.log('flights :>> ', flights);
  }

  const findFlightByDestination = async () => {
    const flights = await axios.post(`${API_BASE_URI}/flights/findByDestination`,{ destination: destination })
    console.log('flights :>> ', flights);
  }

  const findFlightByOriginAndDestination = async () => {
    const flights = await axios.post(`${API_BASE_URI}/flights/findByOriginAndDestination`,
    { origin: origin,
      destination: destination
    })
    console.log('flights :>> ', flights);
  }

  const handleSearch = () => {
    if (origin && !destination){
      findFlightByOrigin()
    } else if (!origin && destination) {
      findFlightByDestination()
    } else if (origin && destination) {
      findFlightByOriginAndDestination()
    }
  }

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
      <button
        className="search-button"
        onClick={handleSearch}
      >
          <Search />
          Search
      </button>
    </div>
  )
}

export default Flights
