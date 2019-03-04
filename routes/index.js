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
router.get('/users/:userID/chirps', fosterController.index)

router.get('/users/:userId/chirps/new', fosterController.new)

router.post('/users/:userId/chirps', fosterController.create)

router.get('/users/:userId/chirps/:chirpId', fosterController.show)

router.get('/users/:userId/chirps/:chirpId/edit', fosterController.edit)

router.put('/users/:userId/chirps/:chirpId', fosterController.update)

router.delete('/users/:userId/chirps/:chirpId', fosterController.delete)

// Shelter routes

module.exports = router