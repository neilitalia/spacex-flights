const { Router } = require('express')
const FlightController = require('../controllers/FlightController')
const FlightRouter = Router()

FlightRouter.get('/health', FlightController.getHealth)
FlightRouter.get('/all', FlightController.getAll)

module.exports = FlightRouter
