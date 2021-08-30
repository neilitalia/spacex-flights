const { Router } = require('express')
const FlightRouter = require('./FlightRouter')

const AppRouter = Router()

AppRouter.use('/flights', FlightRouter)

module.exports = AppRouter
