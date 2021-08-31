import React from 'react'
import FlightDetail from './FlightDetail'
import './EarliestFlight.css'

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
        <FlightDetail label="Departure" data="Sept 8, 2021" textAlign="left"/>
      </div>
      <div className="detail-2">
        <FlightDetail label="Duration" data="9 months" textAlign="center"/>
      </div>
      <div className="detail-3">
        <FlightDetail label="Arrival" data="June 8, 2022"  textAlign="right"/>
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
      <p className="list-1">Spacewalks</p>
      <p className="list-2">Cryosleep</p>
      <p className="list-3">Gigabit Internet</p>
      <p className="list-4">Luxury Cabins</p>
      <p className="list-5">Gourmet Dining</p>
      <p className="list-6">Open Bar</p>
    </div>
  )
}

export default EarliestFlight
