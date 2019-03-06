const Shelter = require('../models/Shelter')

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
    res.render('shelters/new')
  },
  create: (req, res) => {
    Shelter.create(req.body).then(shelter => {
      res.redirect('/shelters/index')
    })
  },
  show: (req, res) => {
    Shelter.findById(req.params.shelterId).then(shelter => {
      res.render('shelters/show', {
        shelter
      })
    })
  },
  delete: (req, res) => {
    Shelter.findByIdAndDelete(req.params.shelterId).then(() => {
      console.log(`Deleted shelter with id of ${req.params.shelterId}`)
      res.redirect('/shelters')
    })
  }
}

module.exports = shelterController