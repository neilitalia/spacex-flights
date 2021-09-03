import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_BASE_URI } from '../globals'
import './Tickets.css'
import Ticket from '../components/Ticket'

const Tickets = () => {

  const [tickets, setTickets] = useState(null)
  const [forceUpdate, setForceUpdate] = useState(false)

  const handleForceUpdate = () => {
    forceUpdate
    ? setForceUpdate(false)
    : setForceUpdate(true)
  }

  useEffect(() => {
    const getAllTickets = async () => {
      const allTickets = await axios.get(`${API_BASE_URI}/tickets/all`)
      setTickets(allTickets.data.results)
    }
    getAllTickets()
  }, [])

  return (
    <div className='Tickets'>
      <h1>Your tickets</h1>
      <div className="tickets-container">
        {
          tickets && tickets.length > 0
            ? tickets.map((ticket) => (
              <Ticket {...ticket} key={ticket._id} tickets={tickets} setTickets={setTickets} setForceUpdate={handleForceUpdate}/>
            ))
            : (<h2>No tickets yet.</h2>)
        }
      </div>
    </div>
  )
}

export default Tickets
