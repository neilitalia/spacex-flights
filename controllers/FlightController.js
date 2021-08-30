const { Flight } = require('../models')

const getHealth = async (req, res) => {
  return res.status(200).send({ msg: 'Success' })
}

module.exports = { getHealth }
