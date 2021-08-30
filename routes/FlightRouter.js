const { Router } = require('express')
const FlightController = require('../controllers/FlightController')
const FlightRouter = Router()

FlightRouter.get('/health', FlightController.GetHealth)

module.exports = FlightRouter
