const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Foster = new Schema({
  name: String,
  breed: String,
  gender: String,
  age: String,
  size: String,
  adoptionFee: String,
  petImg: String,
  description: String,
})

module.exports = mongoose.model("Foster", Foster);