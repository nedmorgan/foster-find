const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Foster = new Schema({
  name: String,
  breed: String,
  gender: String,
  age: String,
  size: String,
  adoptionFee: String,
  petImg: String,
  shelter: [{
    type: Schema.Types.ObjectId,
    ref: 'Shelter'
  }]
})

const Foster = mongoose.model('Foster', Foster);

module.exports = Foster;