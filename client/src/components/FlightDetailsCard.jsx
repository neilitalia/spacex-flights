import React, { useState } from 'react'
import axios from 'axios'
import './FlightDetailsCard.css'
import FlightDetail from './FlightDetail'
import { API_BASE_URI } from '../globals'
import BookFlightPopup from './BookFlightPopup'
import { convertDateToString, getDuration, calculatePrice, formatPrice } from '../globals'

const FlightDetailsCard = (props) => {

  const [bookSuccess, setBookSuccess] = useState(false)

  const bookFlight = async () => {
    const price = calculatePrice(getDuration(props.arrival.date, props.departure.date, props.flightClass))
    const segment = Math.floor(Math.random()*10)
    const payload = {
      "class": props.flightClass,
      "segment": segment,
      "price": price,
      "flight": props._id,
      "passenger": "612ecaa27f4f4e837f4ae17a"
    }
    const bookResponse = await axios.post(`${API_BASE_URI}/tickets/add`, payload)
    if(bookResponse.status === 201){
      setBookSuccess(true)
    }
  }

  const departureDate = convertDateToString(props.departure.date)
  const arrivalDate = convertDateToString(props.arrival.date)
  const duration = `${getDuration(props.arrival.date, props.departure.date)} months`
  const launchpad = `${props.departure.port}, ${props.departure.planet}`
  const vehicle = props.vehicle.toUpperCase()
  const landing = `${props.arrival.port}, ${props.arrival.planet}`
  const terminal = props.departure.terminal
  const price = formatPrice(getDuration(props.arrival.date, props.departure.date))


  return (
    <div className="FlightDetailsCard">
      <FlightDetail label="Departure" data={departureDate} textAlign="left" className="flight-test"/>
      <FlightDetail label="Duration" data={duration} textAlign="center"/>
      <FlightDetail label="Arrival" data={arrivalDate} textAlign="right"/>
      <FlightDetail label="Launchpad" data={launchpad} textAlign="left"/>
      <FlightDetail label="Ride" data={vehicle} textAlign="center"/>
      <FlightDetail label="Landing" data={landing} textAlign="right"/>
      <FlightDetail label="Terminal" data={terminal}/>
      <FlightDetail label="Price" data={price} textAlign="center" />
      <button className="book-now" onClick={bookFlight}>Book This Flight</button>
      {bookSuccess && <BookFlightPopup />}
    </div>
  )
}

export default FlightDetailsCard
