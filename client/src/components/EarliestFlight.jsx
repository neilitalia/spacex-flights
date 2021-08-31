import React from 'react'
import FlightDetail from './FlightDetail'
import './EarliestFlight.css'

const EarliestFlight = () => {
  return (
    <div>
      <div className="destination">
        <h2>Cassini,</h2>
        <p>Arabia Quadrangle,</p>
        <p>Mars</p>
      </div>
      <button>Book Now</button>
      <div>
        <FlightDetail label="Departure" data="Sept 8, 2021" />
        <FlightDetail label="Duration" data="9 months" />
        <FlightDetail label="Arrival" data="June 8, 2022" />
        <FlightDetail label="Launchpad" data="Houston" />
        <FlightDetail label="Ride" data="FALCON HEAVY" />
        <FlightDetail label="Price" data="$ 2M" />
      </div>
    </div>
  )
}

export default EarliestFlight
