const { Router } = require('express')
const FlightRouter = require('./FlightRouter')
const TicketRouter = require('./TicketRouter')
const PassengerRouter = require('./PassengerRouter')

const AppRouter = Router()

AppRouter.use('/flights', FlightRouter)
AppRouter.use('/tickets', TicketRouter)
AppRouter.use('/passengers', PassengerRouter)

module.exports = AppRouter
