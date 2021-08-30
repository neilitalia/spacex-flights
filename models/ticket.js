const { Schema } = require('mongoose')

const Ticket = new Schema(
  {
    class: { type: String, required: true },
    segment: { type: String, required: true },
    price: { type: Number, required: true },
    flight: { type: Schema.Types.ObjectId, ref: 'flights' }
  },
  { timestamps: true }
)

module.exports = Ticket
