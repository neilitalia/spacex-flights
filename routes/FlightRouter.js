const { Router } = require('express')
const FlightController = require('../controllers/FlightController')
const FlightRouter = Router()

FlightRouter.get('/all', FlightController.getAll)
FlightRouter.post('/add', FlightController.addFlight)
FlightRouter.delete('/delete', FlightController.deleteFlight)
FlightRouter.post('/findByOrigin', FlightController.findByOrigin)
FlightRouter.post('/findByDestination', FlightController.findByDestination)
FlightRouter.post(
  '/findByOriginAndDestination',
  FlightController.findByOriginAndDestination
)
FlightRouter.get('/findById/:id', FlightController.findById)

module.exports = FlightRouter
