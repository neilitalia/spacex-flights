const { Ticket } = require('../models')

const getAll = async (req, res) => {
  try {
    const results = await Ticket.find()
    return res.status(200).json({ results })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addTicket = async (req, res) => {
  try {
    const ticket = await new Ticket(req.body)
    await ticket.save()
    return res.status(201).json({ ticket })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteTicket = async (req, res) => {
  try {
    const deleted = await Ticket.findByIdAndDelete(req.body.id)
    if (!deleted) throw new Error('Ticket not found')
    return res.status(200).send('Ticket deleted')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = { getAll, addTicket, deleteTicket }
