import React from 'react'
import FlightDetail from './FlightDetail'
import './EarliestFlight.css'
import CheckMark from '../icons/CheckMark.jsx'

const EarliestFlight = () => {
  return (
    <div className="EarliestFlight">
      <div className="destination">
        <h2 className="city">Cassini,</h2>
        <p className="region">Arabia Quadrangle,</p>
        <p className="planet">Mars</p>
      </div>
      <button className="book-now">Book Now</button>
      <div className="detail-1">
        <FlightDetail label="Departure" data="Sept 5, 2021" textAlign="left"/>
      </div>
      <div className="detail-2">
        <FlightDetail label="Duration" data="9 months" textAlign="center"/>
      </div>
      <div className="detail-3">
        <FlightDetail label="Arrival" data="June 5, 2022"  textAlign="right"/>
      </div>
      <div className="detail-4">
        <FlightDetail label="Launchpad" data="Houston" textAlign="left"/>
      </div>
      <div className="detail-5">
        <FlightDetail label="Ride" data="FALCON HEAVY" textAlign="center"/>
      </div>
      <div className="detail-6">
        <FlightDetail label="Price" data="$ 2M" textAlign="right"/>
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
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/Mars_%2816716283421%29_-_Transparent_background.png" alt="Mars Image" className="planet-image"/>
    </div>
  )
}

export default EarliestFlight
