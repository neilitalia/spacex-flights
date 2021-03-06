const { Passenger } = require('../models')

const getAll = async (req, res) => {
  try {
    const results = await Passenger.find()
    return res.status(200).json({ results })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addPassenger = async (req, res) => {
  try {
    const passenger = await new Passenger(req.body)
    await passenger.save()
    return res.status(201).json({ passenger })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deletePassenger = async (req, res) => {
  try {
    const deleted = await Passenger.findByIdAndDelete(req.body.id)
    if (!deleted) throw new Error('Passenger not found')
    return res.status(200).send('Passenger deleted')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findById = async (req, res) => {
  try {
    const id = req.params.id
    const passenger = await Passenger.findById(id)
    if (passenger) {
      return res.status(200).json({ passenger })
    } else {
      return res
        .status(404)
        .send('Passenger with the specified ID does not exists')
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = { getAll, addPassenger, deletePassenger, findById }
