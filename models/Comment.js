const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comment = new Schema({
  content: String,
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model("Comment", Comment)