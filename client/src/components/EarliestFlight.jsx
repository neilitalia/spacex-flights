import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import FlightDetail from './FlightDetail'
import './EarliestFlight.css'
import CheckMark from '../icons/CheckMark.jsx'
import {API_BASE_URI} from '../globals'

const EarliestFlight = (props) => {
  let history = useHistory()

  const bookFlight = async () => {
    const payload = {
      "class": "economy",
      "segment": "12",
      "price": 2400000,
      "flight": "6132319bbdf5e7b7db755d1b",
      "passenger": "612ecaa27f4f4e837f4ae17a"
    }
    const response = await axios.post(`${API_BASE_URI}/tickets/add`, payload)
    if(response.status === 201){
      history.push('/tickets')
    }
  }

  return (
    <div className="EarliestFlight" ref={props.endOfPage}>
      <div className="destination">
        <h2 className="city">Cassini,</h2>
        <p className="region">Arabia Quadrangle,</p>
        <p className="planet">Mars</p>
      </div>
      <button className="book-now" onClick={bookFlight}>
        Book Now
      </button>
      <div className="detail-1">
        <FlightDetail label="Departure" data="Sep 04, 2021" textAlign="left"/>
      </div>
      <div className="detail-2">
        <FlightDetail label="Duration" data="9 months" textAlign="center"/>
      </div>
      <div className="detail-3">
        <FlightDetail label="Arrival" data="Jun 04, 2022"  textAlign="right"/>
      </div>
      <div className="detail-4">
        <FlightDetail label="Launchpad" data="Florida" textAlign="left"/>
      </div>
      <div className="detail-5">
        <FlightDetail label="Ride" data="FALCON HEAVY" textAlign="center"/>
      </div>
      <div className="detail-6">
        <FlightDetail label="Price" data="$ 2.4M" textAlign="right"/>
      </div>
      <h3 className="flight-privileges">Flight Privileges</h3>
      <div className="list list-1">
        <CheckMark />
        <p>Spacewalks</p>
      </div>
      <div className="list list-2">
        <CheckMark />
        <p>Cryosleep</p>
      </div>
      <div className="list list-3">
        <CheckMark />
        <p>Gigabit Internet</p>
      </div>
      <div className="list list-4">
        <CheckMark />
        <p>Luxury Cabins</p>
      </div>
      <div className="list list-5">
        <CheckMark />
        <p>Gourmet Dining</p>
      </div>
      <div className="list list-6">
        <CheckMark />
        <p>Open Bar</p>
      </div>
      <div className="planet-image-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/Mars_%2816716283421%29_-_Transparent_background.png" alt="Mars Animated" className="planet-image"/>
      </div>
    </div>
  )
}

export default EarliestFlight
