const Comment = require('../models/Comment')

const commentController = {
  new: (req, res) => {
    res.send(`Form to create new comment`)
  },
  create: (req, res) => {
    res.send(`Send new comment to database`)
  },
  delete: (req, res) => {
    res.send(`Delete comment from database`)
  },
}

module.exports = commentController