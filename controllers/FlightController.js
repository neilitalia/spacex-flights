const { Flight } = require('../models')

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

const findByOrigin = async (req, res) => {
  try {
    const origin = req.body.origin
    const results = await Flight.find({
      'departure.planet': { $regex: new RegExp(origin, 'i') }
    })
    if (!results) throw new Error('No flights found')
    return res.status(200).json({ results })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findByDestination = async (req, res) => {
  try {
    const destination = req.body.destination
    const results = await Flight.find({
      'arrival.planet': { $regex: new RegExp(destination, 'i') }
    })
    if (!results) throw new Error('No flights found')
    return res.status(200).json({ results })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findByOriginAndDestination = async (req, res) => {
  try {
    const origin = req.body.origin
    const destination = req.body.destination
    const results = await Flight.find({
      $and: [
        { 'departure.planet': { $regex: new RegExp(origin, 'i') } },
        { 'arrival.planet': { $regex: new RegExp(destination, 'i') } }
      ]
    })
    if (!results) throw new Error('No flights found')
    return res.status(200).json({ results })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findById = async (req, res) => {
  try {
    const id = req.params.id
    const flight = await Flight.findById(id)
    if (flight) {
      return res.status(200).json({ flight })
    } else {
      return res
        .status(404)
        .send('Flight with the specified ID does not exists')
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAll,
  addFlight,
  deleteFlight,
  findByOrigin,
  findByDestination,
  findByOriginAndDestination,
  findById
}
