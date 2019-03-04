const mongoose = require('mongoose');
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

const Shelter = mongoose.model('Shelter', Shelter);

module.exports = Shelter;