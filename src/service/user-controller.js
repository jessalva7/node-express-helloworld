const userRepository = require('../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');

let controller = {
}

controller.getAll = async(_req,res,next) => {

    userRepository.findAll( {
        attributes: ['username', 'full_name']
    
    })
    .then( data => {
        res.json(data) 
    })
    .catch( error => next(error)) 

}

controller.addUser = async(req,res,next) => {

    req.body.password = await bcrypt.hash( req.body.password, 12 )

    userRepository.create(req.body)
    .then( 
        data => {
            res.json(data)
        }
    ).catch(error => next(error));


}

controller.loginUser = async(req,res,next) => {

    userRepository.findByPk( req.body.username )
    .then( 
        data => {
            
            result = bcrypt.compare(req.body.password,data.password).then(

                result  => { 
                    
                    data.password = null
                    if (!result) {

                    
                        error  = new Error("invalid credential")
                        error.status = 403
                        next( error );
                    }

                    jwt.sign( {data}, 'secretkey', {expiresIn:'60s'}, (err,token) => {
                    
                        // if ( !err ){

                        //     console.log("jwt")
                        //     error  = new Error("invalid credential")
                        //     error.status = 403
                        //     next( error );

                        // }

                        res.json( {token} )

                    } )
                }

            )

        }
    ).catch(error => {
        error.status = 403;
        next(error);
    });

}

controller.getUser = async (req,res,next) => {

    userRepository.findByPk( req.params.userid,
    { 
        attributes: ['username', 'full_name', 'verified', 'country_code']  
    })
    .then( 
        data => {
            res.json(data)
        }
    ).catch(error => next(error));

}

controller.verifyToken = async (req,res, next) => {

    const bearerHeader = req.headers['authorization']

    if (typeof req.headers.authorization === 'string') {

        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken
        next()

    } else {

        res.status(401)
        res.json({
            "message":"Couldn't find authorization"
        })

    }

}

controller.authorizeUser = async (req,res, next) => {

    jwt.verify( req.token, 'secretkey', (err,token) => {

        if( err ){

            res.status(403);
            res.json({
                "message":"Could not access"
            })

        }


        next();

    } )

}

module.exports = controller;