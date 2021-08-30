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

module.exports = { getHealth, getAll }
