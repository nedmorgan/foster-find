const Shelter = require('../models/Shelter')
const Foster = require('../models/Foster')

const shelterController = {
  index: (req, res) => {
    Shelter.find()
      .then(shelters => {
        res.render('shelters/index', {
          shelters
        })
      })
  },
  new: (req, res) => {
    Foster.find().then(fosters => {
      res.render('shelters/new', {
        fosters
      })
    })
  },
  create: (req, res) => {
    Shelter.create(req.body).then(shelter => {
      res.redirect('/shelters')
    })
  },
  show: (req, res) => {
    Shelter.findById(req.params.shelterId).populate('animals')
      .then(shelter => {
        Foster.find().then(fosters => {
          res.render('shelters/show', {
            shelter,
            fosters
          }).catch(err => {
            console.log(`Error: ${err}`)
          })
        })
      })
    // Shelter.findById(req.params.shelterId).populate('animals')
    //   .then(shelter => {
    //     res.render('shelters/show', {
    //       shelter,
    //     })
    //   })
  },
  delete: (req, res) => {
    Shelter.findByIdAndDelete(req.params.shelterId).then(() => {
      console.log(`Deleted shelter with id of ${req.params.shelterId}`)
      res.redirect('/shelters')
    })
  }
}

module.exports = shelterController