const User = require('../models/User')

const userController = {
  index: (req, res) => {
    res.send(`User page`)
  },
  new: (req, res) => {
    res.send(`Form to create a new user`)
  },
  create: (req, res) => {
    res.send(`Create new instance in the database`)
  },
  show: (req, res) => {
    res.send(`Show user profile page`)
  },
  delete: (req, res) => {
    res.send(`Deleted user`)
  },
}

module.exports = userController