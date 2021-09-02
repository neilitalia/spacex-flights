import React from 'react'
import axios from 'axios'
import './FlightDetailsCard.css'
import FlightDetail from './FlightDetail'
import { API_BASE_URI } from '../globals'

const FlightDetailsCard = (props) => {

  const convertDateToString = (date) => {
    const D = new Date(date)
    const dateString = D.toDateString().substring(4)
    return dateString
  }

  const getDuration = (firstDate, seconDate) => {
    const date1 = new Date(firstDate)
    const date2 = new Date(seconDate)
    const rawDuration =
      (date1.getTime() - date2.getTime()) / 1000 / (60 * 60 * 24 * 7 * 4)
    return Math.abs(Math.round(rawDuration))
  }

  const calculatePrice = (duration) =>{
    let price = 2000000
    if (props.flightClass === 'first') {
      price = duration * 500000
    } else if (props.flightClass === 'business'){
      price = duration * 400000
    } else if (props.flightClass === 'economy'){
      price = duration * 300000
    }
    return price
  }
  
  const bookFlight = async () => {
    const price = calculatePrice(duration)
    const segment = Math.floor(Math.random()*10)
    const payload = {
      "class": props.flightClass,
      "segment": segment,
      "price": price,
      "flight": props._id,
      "passenger": "612ecaa27f4f4e837f4ae17a"
    }
    console.log('payload :>> ', payload);
    await axios.post(`${API_BASE_URI}/tickets/add`, payload)
  }
  

  const formatPrice = (duration) => {
    const price = calculatePrice(duration) / 1000000
    return `$ ${price}M`
  }

  const departureDate = convertDateToString(props.departure.date)
  const arrivalDate = convertDateToString(props.arrival.date)
  const duration = getDuration(props.arrival.date, props.departure.date)

  return (
    <div className="FlightDetailsCard">
      <FlightDetail label="Departure" data={departureDate} textAlign="left" className="flight-test"/>
      <FlightDetail label="Duration" data={`${duration} months`} textAlign="center"/>
      <FlightDetail label="Arrival" data={arrivalDate} textAlign="right"/>
      <FlightDetail label="Launchpad" data={`${props.departure.port}, ${props.departure.planet}`} textAlign="left"/>
      <FlightDetail label="Ride" data={props.vehicle} textAlign="center"/>
      <FlightDetail label="Landing" data={`${props.arrival.port}, ${props.arrival.planet}`} textAlign="right"/>
      <FlightDetail label="Terminal" data={props.departure.terminal}/>
      <FlightDetail label="Price" data={formatPrice(duration)} textAlign="center" />
      <button className="book-now" onClick={bookFlight}>Book This Flight</button> 
    </div>
  )
}

export default FlightDetailsCard
