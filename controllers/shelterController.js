const Shelter = require('../models/Shelter')

const shelterController = {
  index: (req, res) => {
    res.render('shelters/index')
  },
  new: (req, res) => {
    res.send(`Form to create a new shelter`)
  },
  create: (req, res) => {
    res.send(`Creating a new shelter in the DB`)
  },
  show: (req, res) => {
    res.render('shelters/show')
  },
  delete: (req, res) => {
    res.send(`Delete an individual shelter in the DB`)
  }
}

module.exports = shelterController