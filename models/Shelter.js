const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Shelter = new Schema({
  name: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
  },
  phoneNumber: String,
  animals: [{
    type: Schema.Types.ObjectId,
    ref: 'Foster'
  }]
})

module.exports = mongoose.model('Shelter', Shelter)