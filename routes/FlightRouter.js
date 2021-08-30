const { Router } = require('express')
const FlightController = require('../controllers/FlightController')
const FlightRouter = Router()

FlightRouter.get('/health', FlightController.getHealth)
FlightRouter.get('/all', FlightController.getAll)
FlightRouter.post('/add', FlightController.addFlight)
FlightRouter.delete('/delete', FlightController.deleteFlight)

module.exports = FlightRouter
