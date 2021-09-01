import React from 'react'
import './Ticket.css'

const Ticket = (props) => {
  return (
    <article>
      <div className="qr-code">
        
      </div>
      <div className="ticket-details">
        <h1>{props.passenger}</h1>
      </div>
    </article>
  )
}

export default Ticket
