const mongoose = require('mongoose')
const PassengerSchema = require('./passenger')
const TicketSchema = require('./ticket')
const FlightSchema = require('./flight')

const Flight = mongoose.model('flights', FlightSchema)
const Ticket = mongoose.model('tickets', TicketSchema)
const Passenger = mongoose.model('passengers', PassengerSchema)

module.exports = {
  Flight,
  Ticket,
  Passenger
}
