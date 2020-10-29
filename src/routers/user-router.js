const express = require('express');
const userController = require('../service/user-controller')

userRouter = express.Router();

userRouter.get('/', userController.verifyToken, userController.authorizeUser,userController.getAll)

userRouter.post('/login', userController.loginUser)

userRouter.post("/signup", userController.addUser)

userRouter.get('/:userid', userController.verifyToken, userController.authorizeUser, userController.getUser)

module.exports = userRouter 