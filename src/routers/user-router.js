const express = require('express');
const userRepository = require('../model/userModel');
userRouter = express.Router();


userRouter.get('/', (_req,res,next) => {


    userRepository.findAll()
    .then( data => {
        res.json(data) 
    })
    .catch( error => next(error)) 
    

})

userRouter.post("/add-user", async(req,res,next) => {

    userRepository.create(req.body)
    .then( 
        data => {
            res.json(data)
        }
    ).catch(error => next(error));
})

userRouter.get('/:userid', (req,res) => {

    userRepository.findByPk( req.params.userid )
    .then( 
        data => {
            res.json(data)
        }
    ).catch(error => next(error));

})


module.exports = userRouter 