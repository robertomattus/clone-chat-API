const express = require('express')

const responseHandlers = require('./utils/handleResponses')
const db = require('./utils/database')
const initModels = require('./models/initModels')

const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const conversationRouter = require('./conversations/conversations.router')


const app = express()
app.use(express.json())

db.authenticate()
    .then(()=>{
        console.log('Database credentials correct')
    })
    .catch((err)=>{
        console.log(err)
    })

db.sync()
    .then(()=>{
        console.log('Database synced successfully')
    })
    .catch((err)=>{
        console.log(err)
    })

initModels()

app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'Server started correctly',
        data: {
            "users": "http://localhost:9000/api/v1/users",
            "conversations": "http://localhost:9000/api/v1/conversations"
        }
    })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/conversations', conversationRouter)

app.use('*', (req, res)=> {
    responseHandlers.error({
        res,
        status: 404,
        message: 'URL not found, please try with http://localhost:9000/',
    })
})

app.listen(9000,() => {
    console.log('Server started at port 9000 http://localhost:9000')
})