const mongoose = require('../../../Database')

const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    require: true
  },
  coordinates: {
    type: [Number],
    require: true
  }
})

module.exports = PointSchema;