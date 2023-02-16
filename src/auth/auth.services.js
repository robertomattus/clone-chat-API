const checkUserCredentials = require('./auth.controller')
const handleResponses = require('../utils/handleResponses')
const jwt = require('jsonwebtoken')

const postLogin = (req, res) => {
    const { email, password } = req.body
    checkUserCredentials(email, password)
        .then(data => {
            if(data){
                const token = jwt.sign({
                    id: data.id,
                    email: data.email,
                    firstName: data.firstName
                }, 'academlo', {
                    expiresIn: 30
                })
                handleResponses.success({
                    res,
                    status: 200,
                    message: 'Correct credentials',
                    data: token
                })
            } else {
                handleResponses.error({
                    res,
                    status: 401,
                    message: 'Invalid credentials'
                })
            }
        })
        .catch(err => {
            handleResponses.error({
                res,
                status: 400,
                data: err,
                message: 'Something went bad'
            })
        })
}

module.exports = postLogin