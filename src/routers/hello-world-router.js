const express=require('express');
const router=express.Router();


router.get("/",(_request, response) => {

    response.send("Hello World")

})

router.post("/",(_request, response) => {

    response.json({
        "message":"Hello World"
    })

})

router.post("/file",(_request, response) => {

    response.sendFile( './resources/helloWorld.txt' , { root : __dirname})

})

router.get("/world/:user",(request, response) => {

    console.log( request.params.user )
    response.json({
        "message":"Hello " + request.params.user
    })

})

router.post("/message/:user",(request, response) => {

    console.log(request.params)
    if ( !request.params || (request.params.user.length < 2)) {
        throw new Error("No user")
    }

    console.log( request.params.user )
    response.json({
        "message": `${request.body.message} ${request.params.user}`
    })

})


module.exports = router