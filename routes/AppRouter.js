const { Router } = require('express')
const FlightRouter = require('./FlightRouter')
const TicketRouter = require('./TicketRouter')

const AppRouter = Router()

AppRouter.use('/flights', FlightRouter)
AppRouter.use('/tickets', TicketRouter)

module.exports = AppRouter
