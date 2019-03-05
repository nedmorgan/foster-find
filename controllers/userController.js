const User = require('../models/User')

const userController = {
  index: (req, res) => {
    res.send(`User page`)
  },
  new: (req, res) => {
    res.render('users/new')
  },
  create: (req, res) => {
    res.send(`Create new instance in the database`)
  },
  show: (req, res) => {
    res.render('users/show')
  },
  delete: (req, res) => {
    res.send(`Deleted user`)
  },
}

module.exports = userController