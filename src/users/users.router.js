const router = require('express').Router()
const userServices = require('./users.services')
const passportJwt = require('../middlewares/auth.middleware')

router.get('/', userServices.getAllUsers)
router.post('/', userServices.postNewUser)

router.get('/me', passportJwt, userServices.getMyUser)
router.patch('/me', passportJwt, userServices.patchMyUser)
router.delete('/me', passportJwt, userServices.deleteMyUser)    

router.get('/:id', userServices.getUserById)
router.delete('/:id', userServices.deleteUser)
router.patch('/:id', userServices.patchUser)

module.exports = router