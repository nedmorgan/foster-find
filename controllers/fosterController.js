const Foster = require('../models/Foster')

const fosterController = {
  index: (req, res) => {
    res.render('fosters/index')
  },
  new: (req, res) => {
    res.render('fosters/new')
  },
  create: (req, res) => {
    res.send(`Sending new foster to the DB`)
  },
  show: (req, res) => {
    res.render('fosters/show')
  },
  edit: (req, res) => {
    res.render('fosters/:fosterId/edit')
  },
  update: (req, res) => {
    res.send(`Sending the updated info to the database`)
  },
  delete: (req, res) => {
    res.send(`Removed a foster`)
  },
}

module.exports = fosterController