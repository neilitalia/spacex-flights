import React from 'react'
import './BookFlightPopup.css'
import { NavLink } from 'react-router-dom'

const BookFlightPopup = () => {
  return (
    <div className="BookFlightPopup">
      <h2>Ticket booked!</h2>
      <button>
        <NavLink to="/tickets">
          View Cart
        </NavLink>
      </button>
    </div>
  )
}

export default BookFlightPopup
