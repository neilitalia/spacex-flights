const { Router } = require('express')
const PassengerController = require('../controllers/PassengerController')
const PassengerRouter = Router()

PassengerRouter.get('/all', PassengerController.getAll)
PassengerRouter.post('/add', PassengerController.addPassenger)
PassengerRouter.delete('/delete', PassengerController.deletePassenger)

module.exports = PassengerRouter