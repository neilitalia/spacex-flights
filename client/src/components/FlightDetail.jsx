import React from 'react'

const FlightDetail = (props) => {
  return (
    <article>
      <p>{props.label}</p>
      <h3>{props.data}</h3>
    </article>
  )
}

export default FlightDetail
