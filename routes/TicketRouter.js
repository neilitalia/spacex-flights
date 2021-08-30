const { Router } = require('express')
const TicketController = require('../controllers/TicketController')
const TicketRouter = Router()

TicketRouter.get('/all', TicketController.getAll)
TicketRouter.post('/add', TicketController.addTicket)
TicketRouter.delete('/delete', TicketController.deleteTicket)

module.exports = TicketRouter
