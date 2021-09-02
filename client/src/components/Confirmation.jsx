import React from 'react'
import './Confirmation.css'

const Confirmation = (props) => {
  return (
    <div className="Confirmation">
      <h2>Are you sure you want to cancel this flight?</h2>
      <button onClick={()=>props.setConfirmCancel(true)}>Yes</button>
      <button onClick={()=>props.setCancelAttempt(false)}>No</button>
    </div>
  )
}

export default Confirmation
