const { Flight } = require('../models')

const getHealth = async (req, res) => {
  return res.status(200).send({ msg: 'Success' })
}

const getAll = async (req, res) => {
  try {
    const results = await Flight.find()
    return res.status(200).json({ results })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addFlight = async (req, res) => {
  try {
    const flight = await new Flight(req.body)
    await flight.save()
    return res.status(201).json({ flight })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteFlight = async (req, res) => {
  try {
    const deleted = await Flight.findByIdAndDelete(req.body.id)
    if (!deleted) throw new Error('Flight not found')
    return res.status(200).send('Flight deleted')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = { getHealth, getAll, addFlight, deleteFlight }
