const GetHealth = async (req, res) => {
  return res.status(200).send({ msg: 'Success' })
}

module.exports = { GetHealth }
