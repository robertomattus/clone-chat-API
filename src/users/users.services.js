const handleResponses = require('../utils/handleResponses')
const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
        .then(data => {
            handleResponses.success({
                res,
                data,
                status: 200,
                message: 'All users collected succesfully'
            })
        })
        .catch(err => {
            handleResponses.error({
                res,
                data: err,
                status: 400,
                message: 'Error showing all users'
            })
        })
}

const getUserById = (req, res) => {
    const id = Number(req.params.id)
    userControllers.findUserById(id)
        .then(data => {
            if(data){
                handleResponses.success({
                    res,
                    data,
                    status: 200,
                    message: `User with id: ${id}`
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
                message: 'Error showing this user'
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
                message: 'User created succesfully'
            })
        })
        .catch(err => {
            handleResponses.error({
                res,
                data: err,
                status: 400,
                message: 'Error creating user'
            })
        })
}

const deleteUser = (req, res) => {
    const id = Number(req.params.id)
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
                    message: 'User not found'
                })
            }
        })
        .catch(err => {
            handleResponses.error({
                res,
                data: err,
                status: 400,
                message: 'Error deleting user'
            })
        })
}

const patchUser = (req, res) => {
    const id = Number(req.params.id)
    const userObj = req.body
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
                message: 'Edit error with user'
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

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser,
    deleteUser,
    patchUser,
    putUser
}