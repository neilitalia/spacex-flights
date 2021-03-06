const { Schema } = require('mongoose')

const Passenger = new Schema(
  {
    name: { type: String, required: true },
    tickets: [{ type: Schema.Types.ObjectId, ref: 'tickets' }]
  },
  { timestamps: true }
)

module.exports = Passenger
