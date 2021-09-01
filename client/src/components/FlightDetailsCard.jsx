import React from 'react'
import './FlightDetailsCard.css'
import FlightDetail from './FlightDetail'

const FlightDetailsCard = (props) => {

  const convertDateToString = (date) => {
    const D = new Date(date)
    const dateString = D.toDateString().substring(4)
    return dateString
  }

  const getDuration = (firstDate, seconDate) => {
    const date1 = new Date(firstDate)
    const date2 = new Date(seconDate)
    const rawDuration = (date1.getTime() - date2.getTime()) / 1000 / (60*60*24*7*4)
    return `${Math.abs(Math.round(rawDuration))} months`
  }
  
  const departureDate = convertDateToString(props.departure.date)
  const arrivalDate = convertDateToString(props.arrival.date)
  const duration = getDuration(props.arrival.date, props.departure.date)

  return (
    <div className="FlightDetailsCard">
      <FlightDetail label="Departure" data={departureDate} textAlign="left" className="flight-test"/>
      <FlightDetail label="Duration" data={duration} textAlign="center"/>
      <FlightDetail label="Arrival" data={arrivalDate} textAlign="right"/>
      <FlightDetail label="Launchpad" data={`${props.departure.port}, ${props.departure.planet}`} textAlign="left"/>
      <FlightDetail label="Ride" data={props.vehicle} textAlign="center"/>
      <FlightDetail label="Landing" data={`${props.arrival.port}, ${props.arrival.planet}`} textAlign="right"/>
      <div></div>
      <FlightDetail label="Price" data="..." textAlign="center" />
      <button className="book-now">Book This Flight</button> 
    </div>
  )
}

export default FlightDetailsCard
