const Shelter = require('../models/Shelter')
const Foster = require('../models/Foster')

const shelterController = {
  // Show the shelter index page which lists all shelters
  index: (req, res) => {
    Shelter.find()
      .then(shelters => {
        res.render('shelters/index', {
          shelters
        })
      })
  },
  new: (req, res) => {
    // Form to add a new shelter
    Foster.find().then(fosters => {
      res.render('shelters/new', {
        fosters
      })
    })
  },
  create: (req, res) => {
    // Request to add a new shelter
    Shelter.create(req.body).then(shelter => {
      res.redirect('/shelters')
    })
  },
  addPet: (req, res) => {
    // Request to add a new foster to the shelter
    Shelter.findById(req.params.shelterId).then(shelter => {
      console.log(req.body)
      shelter.animals.push(req.body.animals)
      shelter.save()
      res.redirect(`/shelters/${req.params.shelterId}`)
    })
  },
  show: (req, res) => {
    // Show a specific shelter
    Shelter.findById(req.params.shelterId).populate('animals')
      .then(shelter => {
        Foster.find().then(fosters => {
          res.render('shelters/show', {
            shelter,
            fosters
          })
        })
      })
  },
  delete: (req, res) => {
    // Request to delete a shelter
    Shelter.findByIdAndDelete(req.params.shelterId).then(() => {
      console.log(`Deleted shelter with id of ${req.params.shelterId}`)
      res.redirect('/shelters')
    })
  }
}

module.exports = shelterController