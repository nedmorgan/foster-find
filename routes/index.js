const express = require('express')
const router = express.Router()
const {
  ensureAuthenticated
} = require('../config/auth')
const appController = require('../controllers/appController')
const userController = require('../controllers/userController')
const fosterController = require('../controllers/fosterController')
const shelterController = require('../controllers/shelterController')

// Welcome Page
router.get('/', appController.index);
router.get('/dashboard', ensureAuthenticated, appController.dashboard)

// User routes
router.get('/login', userController.index)

router.post('/login', userController.login)

router.get('/register', userController.new)

router.post('/register', userController.register)

router.get('/logout', userController.logout)

router.delete('/:userId', userController.delete)

// Foster routes
router.get('/users/:userID/chirps', chirpController.index)

router.get('/users/:userId/chirps/new', chirpController.new)

router.post('/users/:userId/chirps', chirpController.create)

router.get('/users/:userId/chirps/:chirpId', chirpController.show)

router.get('/users/:userId/chirps/:chirpId/edit', chirpController.edit)

router.put('/users/:userId/chirps/:chirpId', chirpController.update)

router.delete('/users/:userId/chirps/:chirpId', chirpController.delete)

// Shelter routes

module.exports = router