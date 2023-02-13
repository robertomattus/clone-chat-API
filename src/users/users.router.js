const userServices = require('./users.services')
const router = require('express').Router()

router.get('/users', userServices.getAllUsers)
router.get('/users/:id', userServices.getUserById)
router.post('/users', userServices.postNewUser)
router.delete('/users/:id', userServices.deleteUser)
router.patch('/users/:id', userServices.patchUser)

module.exports = router