const express = require('express')

const userController = require('../controllers/userController')

const userRouter = express.Router()

userRouter.post('/addUser', userController.addUser)

module.exports = userRouter
