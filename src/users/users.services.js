const handleResponses = require('../utils/handleResponses')
const userControllers = require('./users.controllers')
const { hashPassword } = require('../utils/crypto')

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
        .then(data => {
            handleResponses.success({
                res,
                data,
                status: 200,
                message: 'Getting all users'
            })
        })
        .catch(err => {
            handleResponses.error({
                res,
                data: err,
                status: 400,
                message: 'Something bad getting all users'
            })
        })
}

const getUserById = (req, res) => {
    const id = req.params.id
    userControllers.findUserById(id)
        .then(data => {
            if(data){
                handleResponses.success({
                    res,
                    data,
                    status: 200,
                    message: `Getting user with ID: ${id}`
                })
            } else {
                handleResponses.error({
                    res,
                    status: 404,
                    message: `User with ID: ${id} not found`
                })
            }
        })
        .catch(err => {
            handleResponses.error({
                res,
                data: err,
                status: 400,
                message: 'Something bad getting this user'
            })
        })
}

const postNewUser = (req, res) => {
    const userObj = req.body
    userControllers.createNewUser(userObj)
        .then(data => {
            handleResponses.success({
                res,
                data,
                status: 201,
                message: `User created succesfully with id: ${data.id}`
            })
        })
        .catch(err => {
            handleResponses.error({
                res,
                data: err,
                status: 400,
                message: 'Error ocurred trying to create a new user',
                fields: {
                    firstName : 'String',
                    lastName : 'String',
                    email: 'example@example.com',
                    password: 'String',
                    profileImage: 'example.com/image.png',
                    phone : '+52 1234 123 123'
                }
            })
        })
}

const deleteUser = (req, res) => {
    const id = req.params.id
    userControllers.deleteUser(id)
        .then(data => {
            if(data){
                handleResponses.success({
                    res,
                    data,
                    status: 204,
                    message: `User with id: ${id} deleted succesfully`
                })
            } else {
                handleResponses.error({
                    res,
                    status: 404,
                    message: `User with ID ${id} not found`
                })
            }
        })
        .catch(err => {
            handleResponses.error({
                res,
                data: err,
                status: 400,
                message: `Error ocurred trying to delete user with ID ${id}`
            })
        })
}

const patchUser = (req, res) => {
    const id = req.params.id
    const userObj = req.body
    userControllers.updateUser(id, userObj)
        .then(data => {
            if(data){
                handleResponses.success({
                    res,
                    data,
                    status: 200,
                    message: `User with id: ${id} modified succesfully`
                })
            } else {
                handleResponses.error({
                    res,
                    status: 404,
                    message: `User with ID ${id} not found`,
                    fields: {
                        firstName : 'String',
                        lastName : 'String',
                        email: 'example@example.com',
                        password: 'String',
                        profileImage: 'example.com/image.png',
                        phone : '+52 1234 123 123'
                    }
                })
            }
        })
        .catch(err => {
            handleResponses.error({
                res,
                data: err,
                status: 400,
                message: `Error ocurred trying to update user with ID ${id}`,
                fields: {
                    firstName : 'String',
                    lastName : 'String',
                    email: 'example@example.com',
                    password: 'String',
                    profileImage: 'example.com/image.png',
                    phone : '+52 1234 123 123'
                }
            })  
        })
}

const putUser = (req, res) => {
    const id = Number(req.params.id)
    const userObj = req.body
    if(!userObj.firstName || !userObj.lastName || !userObj.email || !userObj.password || !userObj.profileImage || !userObj.phone){
        return handleResponses.error({
            res,
            data: err,
            status: 400,
            message: 'Missing data'
        })
    }
    userControllers.updateUser(id, userObj)
        .then(data => {
            if(data){
                handleResponses.success({
                    res,
                    data,
                    status: 200,
                    message: `Post with id: ${id} updated succesfully`
                })
            } else {
                handleResponses.error({
                    res,
                    status: 404,
                    message: 'User not found'
                })
            }
        })
        .catch(err => {
            handleResponses.error({
                res,
                data: err,
                status: 400,
                message: 'Error updating user'
            })
        })
}

const getMyUser = (req, res) => {
    const id = req.user.id
    userControllers.findUserById(id)
        .then(data => {
            handleResponses.success({
                res,
                status: 200,
                message: 'This is your current user',
                data
            })
        })
        .catch(err => {
            handleResponses.error({
                res,
                status:400,
                message: 'Something bad getting the current user',
                data: err
            })
        })
}

const deleteMyUser = (req, res) => {
    const id = req.user.id 
    userControllers.deleteUser(id)
        .then(data => {
            handleResponses.success({
                res,
                status: 200,
                message: 'Your user were deleted successfully',
                data
            })
        })
        .catch(err => {
            handleResponses.error({
                res,
                status:400,
                message: 'Something bad deletting this user',
                data: err
            })
        })
}

const patchMyUser = (req, res) => {
    const id = req.user.id
    const { firstName, lastName, email, password, profileImage, phone } = req.body
    const userObj = {
        firstName,
        lastName,
        email,
        password: hashPassword(password),
        profileImage,
        phone
    }
    userControllers.updateUser(id, userObj)
        .then(data => {
            handleResponses.success({
                res,
                status: 200,
                message: 'Your user has been updated successfully'
            })
        })
        .catch(err => {
            handleResponses.error({
                res, 
                status: 400,
                message: 'Something bad',
                data: err
            })
        })
}

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser,
    deleteUser,
    patchUser,
    putUser,
    getMyUser,
    deleteMyUser,
    patchMyUser
}