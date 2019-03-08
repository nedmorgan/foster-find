const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController')
const userController = require('../controllers/userController')
const fosterController = require('../controllers/fosterController')
const shelterController = require('../controllers/shelterController')

// Application routes
router.get('/', appController.index)

// User routes
router.get('/users', userController.index)

router.get('/users/new', userController.new)

router.post('/users', userController.create)

router.get('/users/:userId', userController.show)

router.delete('/users/:userId', userController.delete)

// Foster routes
router.get('/fosters', fosterController.index)

router.get('/fosters/new', fosterController.new)

router.post('/fosters', fosterController.create)

router.get('/fosters/:fosterId', fosterController.show)

router.get('/fosters/:fosterId/edit', fosterController.edit)

router.put('/fosters/:fosterId', fosterController.update)

router.delete('/fosters/:fosterId', fosterController.delete)

// Shelter routes

router.get('/shelters', shelterController.index)

router.get('/shelters/new', shelterController.new)

router.post('/shelters/:shelterId', shelterController.addPet)

router.post('/shelters', shelterController.create)

router.get('/shelters/:shelterId', shelterController.show)

router.delete('/shelters/:shelterId', shelterController.delete)

// Comment routes

router.get('/fosters/:fosterId/comments/new', shelterController.new)

router.post('/fosters/:fosterId/comments', shelterController.create)

router.delete('/fosters/:fosterId/comments/:commentId', shelterController.delete)

module.exports = router