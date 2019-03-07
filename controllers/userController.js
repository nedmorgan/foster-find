const User = require('../models/User')

const userController = {
  // Shows the current users
  index: (req, res) => {
    User.find().then(users => {
      res.render('users/index', {
        users
      })
    })
  },
  new: (req, res) => {
    // Shows the form to create a new user
    res.render('users/new')
  },
  create: (req, res) => {
    // Request to create a new user in the db
    // User.remove({})
    //   .then(() => 
    User.create(req.body).then(user => {
      res.redirect(`/users/${user._id}`)
    })
  },
  show: (req, res) => {
    // Shows a specific user
    User.findById(req.params.userId).then(user => {
      res.render('users/show', {
        user
      })
    })
  },
  delete: (req, res) => {
    // Request to remove a user from the database
    User.findByIdAndDelete(req.params.userId).then(() => {
      console.log(`Deleted user with id of ${req.params.userId}`)
      res.redirect('/')
    })
  },
}
module.exports = userController