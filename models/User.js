const mongoose = require('../db/connection');
const Schema = mongoose.Schema

const User = new Schema({
  name: String,
  localShelter: String,
});

module.exports = mongoose.model('User', User)