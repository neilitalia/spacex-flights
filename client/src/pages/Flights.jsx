import React,{useState} from 'react'
import axios from 'axios'
import './Flights.css'
import Search from '../icons/Search'
import { API_BASE_URI } from '../globals'
import FlightDetail from '../components/FlightDetail'

const Flights = () => {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [flights, setFlights] = useState()
  const [searched, toggleSearched] = useState(false)

  const findFlightByOrigin = async () => {
    const flights = await axios.post(`${API_BASE_URI}/flights/findByOrigin`,{ origin: origin })
    setFlights(flights.data.results)
  }

  const findFlightByDestination = async () => {
    const flights = await axios.post(`${API_BASE_URI}/flights/findByDestination`,{ destination: destination })
    setFlights(flights.data.results)
  }

  const findFlightByOriginAndDestination = async () => {
    const flights = await axios.post(`${API_BASE_URI}/flights/findByOriginAndDestination`,
    { origin: origin,
      destination: destination
    })
    setFlights(flights.data.results)
  }

  const handleSearch = () => {
    toggleSearched(false)
    if (origin && !destination){
      findFlightByOrigin()
    } else if (!origin && destination) {
      findFlightByDestination()
    } else if (origin && destination) {
      findFlightByOriginAndDestination()
    }
    toggleSearched(true)
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
      <select name="flight-trips" className="dropdown flight-trips">
        <option value="one-way">One Way</option>
        <option value="rount-trip">Round Trip</option>
      </select>
      <select name="flight-class" className="dropdown flight-class">
        <option value="first-class">First Class</option>
        <option value="business-class">Business</option>
        <option value="economy-class">Economy</option>
      </select>
      <select name="flight-persons" className="dropdown flight-persons">
        <option value="one-person">1 Person</option>
        <option value="two-persons">2 Persons</option>
      </select>
      <div className="detail-1">
        <FlightDetail label="Departure" data='...' textAlign="left" className="flight-test"/>
      </div>
      <div className="detail-2">
        <FlightDetail label="Duration" data="..." textAlign="center"/>
      </div>
      <div className="detail-3">
        <FlightDetail label="Arrival" data="..." textAlign="right"/>
      </div>
      <div className="detail-4">
        <FlightDetail label="Launchpad" data="..." textAlign="left"/>
      </div>
      <div className="detail-5">
        <FlightDetail label="Ride" data="..." textAlign="center"/>
      </div>
      <div className="detail-6">
        <FlightDetail label="Landing" data="..." textAlign="center"/>
      </div>
      <div className="detail-7">
        <FlightDetail label="Price" data="..." textAlign="right" />
      </div>
      <button className="book-now">Book Now</button>
    </div>
  )
}

export default Flights
