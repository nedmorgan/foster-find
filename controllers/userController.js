const User = require('../models/User')

const userController = {
  index: (req, res) => {
    res.send(`Index page of app`)
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