import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { API_BASE_URI } from '../globals'
import CancelConfirmation from './CancelConfirmation'
import './Ticket.css'

const Ticket = (props) => {
  const [passenger, setPassenger] = useState('')
  const [flight, setFlight] = useState('')
  const [cancelAttempt, setCancelAttempt] = useState(false)
  const [confirmCancel, setConfirmCancel] = useState(false)

  const convertDateToString = (date) => {
    const D = new Date(date)
    const dateString = D.toDateString().substring(4)
    return dateString
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const cancelFlight = async () => {
    const result = await axios.delete(`${API_BASE_URI}/tickets/delete`,
      { data: {id: props._id}})
    console.log(result)
  }

  const handleCancellation = () => {
    cancelAttempt
      ? setCancelAttempt(false)
      : setCancelAttempt(true)
  }

  useEffect(() => {
    const getPassenger = async () => {
      const result = await axios.get(`${API_BASE_URI}/passengers/findById/${props.passenger}`)
      setPassenger(result.data.passenger)
    }
    const getFlight = async () => {
      const result = await axios.get(`${API_BASE_URI}/flights/findById/${props.flight}`)
      setFlight(result.data.flight)
    }
    getPassenger()
    getFlight()
  }, [props.passenger, props.flight])

  useEffect(() => {
    if(cancelAttempt && confirmCancel){
      cancelFlight()
    }
  }, [cancelAttempt, confirmCancel])

  return (
    <div>
      <article className="Ticket">
        <div className="qr-code">
          <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${JSON.stringify(props)}`} alt="" />
        </div>
        {
          passenger && flight
          ? (<div className="ticket-details-container">
              <h1>{passenger.name}</h1>
              <div className="ticket-details">
                <div className="text-align-left">
                  <h3>Departure</h3>
                  <p>{`${flight.departure.port}, ${flight.departure.planet}`}</p>
                  <p>{`Terminal ${flight.departure.terminal}`}</p>
                  <p>{`${convertDateToString(flight.departure.date)}`}</p>
                </div>
                <div className="text-align-center">
                  <h3>Ride</h3>
                  <p>{`${capitalizeFirstLetter(props.class)} Class`}</p>
                  <p>{`Segment ${props.segment}`}</p>
                  <p>{`${flight.vehicle}`}</p>
                </div>
                <div className="text-align-right">
                  <h3>Arrival</h3>
                  <p>{`${flight.arrival.port}, ${flight.arrival.planet}`}</p>
                  <p>{`Terminal ${flight.arrival.terminal}`}</p>
                  <p>{`${convertDateToString(flight.arrival.date)}`}</p>
                </div>
              </div>
            </div>)
          : (<p>No data found</p>)
        }
      </article>
      <div className="ticket-footer">
        <h4 className='ticket-footer-button'>Send to phone</h4>
        <h4>Flight {props.flight}</h4>
        <h4 onClick={handleCancellation} className='ticket-footer-button'>Cancel flight</h4>
      </div>
      <div className="cancel-confirmation">
        {
          cancelAttempt
          ? <CancelConfirmation setCancelAttempt={setCancelAttempt} setConfirmCancel={setConfirmCancel}/>
          : <div></div>
        }
      </div>
    </div>
  )
}

export default Ticket
