const User = require('../models/User')

const userController = {
  new: (req, res) => {
    res.render('users/new')
  },
  create: (req, res) => {
    User.remove({})
      .then(() => User.create(req.body)).then(user => {
        res.redirect(`/users/${user._id}`)
      })
  },
  show: (req, res) => {
    User.findById(req.params.userId).then(user => {
      res.render('users/show', {
        user
      })
    })
  },
  delete: (req, res) => {
    User.findByIdAndDelete(req.params.userId).then(() => {
      console.log(`Deleted user with id of ${req.params.userId}`)
      res.redirect('/')
    })
  },
}

module.exports = userController