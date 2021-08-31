import React from 'react'
import './FlightDetail.css'

const FlightDetail = (props) => {
  return (
    <article className="FlightDetail" style={{ textAlign: props.textAlign}}>
      <p>{props.label}</p>
      <h3>{props.data}</h3>
    </article>
  )
}

export default FlightDetail
