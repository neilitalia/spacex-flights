import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_BASE_URI } from '../globals'
import './Tickets.css'
import Ticket from '../components/Ticket'

const Tickets = () => {

  const [tickets, setTickets] = useState(null)

  const getAllTickets = async () => {
    const allTickets = await axios.get(`${API_BASE_URI}/tickets/all`)
    setTickets(allTickets.data.results)
  }

  useEffect(() => {
    getAllTickets()
  }, [])

  return (
    <div className='Tickets'>
      <h1>Your tickets</h1>
      <div className="tickets-container">
        {
          tickets
            ? tickets.map((ticket) => (
              <Ticket {...ticket} key={ticket._id}/>
            ))
            : (<h3>No tickets yet.</h3>)
        }
      </div>
    </div>
  )
}

export default Tickets
