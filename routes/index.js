const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const fosterController = require('../controllers/fosterController')
const shelterController = require('../controllers/shelterController')

// User routes
router.get('/', userController.index)

router.post('/', userController.create)

router.get('/:userId', userController.show)

router.delete('/:userId', userController.delete)

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

router.post('/shelters', shelterController.create)

router.get('/shelters/:shelterId', shelterController.show)

router.delete('/shelters/:shelterId', shelterController.delete)

module.exports = router