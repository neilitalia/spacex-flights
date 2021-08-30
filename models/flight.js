const { Schema } = require('mongoose')

const Flight = new Schema(
  {
    departure: {
      date: { type: Date, required: true },
      port: { type: String, required: true },
      terminal: { type: String, required: true }
    },
    arrival: {
      date: { type: Date, required: true },
      port: { type: String, required: true },
      terminal: { type: String, required: true }
    },
    vehicle: { type: String, required: true }
  },
  { timestamps: true }
)
module.exports = Post
