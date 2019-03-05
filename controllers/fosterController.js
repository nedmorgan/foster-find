const Foster = require('../models/Foster')

const fosterController = {
  index: (req, res) => {
    Foster.find()
      .then(fosters => {
        res.render('fosters/index', {
          fosters
        })
      })
  },
  new: (req, res) => {
    res.render('fosters/new')
  },
  create: (req, res) => {
    Foster.create(req.body).then(foster => {
      res.redirect('fosters/index')
    })
  },
  show: (req, res) => {
    Foster.findById(req.params.fosterId).then(foster => {
      res.render('fosters/show', {
        foster
      })
    })
  },
  edit: (req, res) => {
    Foster.findById(req.params.fosterId).then(foster => {
      res.render('fosters/:fosterId/edit', {
        foster
      })
    })
  },
  update: (req, res) => {
    res.send(`Sending the updated info to the database`)
  },
  delete: (req, res) => {
    Foster.findByIdAndDelete(req.params.fosterId).then(() => {
      console.log(`Deleted foster with id of ${req.params.fosterId}`)
      res.redirect('/fosters')
    })
  },
}

module.exports = fosterController