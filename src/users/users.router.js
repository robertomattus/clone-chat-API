const userServices = require('./users.services')
const router = require('express').Router()

router.get('/', userServices.getAllUsers)
router.get('/:id', userServices.getUserById)
router.post('/', userServices.postNewUser)
router.delete('/:id', userServices.deleteUser)
router.patch('/:id', userServices.patchUser)

module.exports = router