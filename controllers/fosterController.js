const Foster = require('../models/Foster')

const fosterController = {
  // Shows the index page of all fosters
  index: (req, res) => {
    Foster.find()
      .then(fosters => {
        res.render('fosters/index', {
          fosters
        })
      })
  },
  new: (req, res) => {
    // Shows page to create a new foster
    res.render('fosters/new')
  },
  create: (req, res) => {
    // Request to create a new foster in db
    Foster.create(req.body).then(foster => {
      res.redirect('/fosters')
    })
  },
  show: (req, res) => {
    // Shows a specific foster
    Foster.findById(req.params.fosterId).then(foster => {
      res.render('fosters/show', {
        foster
      })
    })
  },
  edit: (req, res) => {
    // Shows edit page to update foster information
    Foster.findById(req.params.fosterId).then(foster => {
      res.render('fosters/edit', {
        foster
      })
    })
  },
  update: (req, res) => {
    // Request to update the foster information
    Foster.findByIdAndUpdate(req.params.fosterId, req.body, {
      new: true
    }).then(() => {
      res.redirect(`/fosters/${req.params.fosterId}`)
    })
  },
  delete: (req, res) => {
    // Request to remove a foster from db
    Foster.findByIdAndDelete(req.params.fosterId).then(() => {
      console.log(`Deleted foster with id of ${req.params.fosterId}`)
      res.redirect('/fosters')
    })
  },
}

module.exports = fosterController