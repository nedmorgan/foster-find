const mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  localShelter: String,
});

const User = mongoose.model('User', User);

module.exports = User;