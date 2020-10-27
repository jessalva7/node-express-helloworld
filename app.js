//import express
const express=require('express')
const parser = require('body-parser')
const RequestLogger = require('./requestLogger')
const ErrorLogger = require('./errorLogger')


const app = express()
app.use(parser.json())
app.use(RequestLogger)

app.get("/",(_request, response) => {

    response.send("Hello World")

})

app.post("/",(_request, response) => {

    response.json({
        "message":"Hello World"
    })

})

app.post("/file",(_request, response) => {

    response.sendFile( 'helloWorld.txt' , { root : __dirname})

})

app.get("/world/:user",(request, response) => {

    console.log( request.params.user )
    response.json({
        "message":"Hello " + request.params.user
    })

})

app.post("/message/:user",(request, response) => {

    console.log(request.params)
    if ( !request.params || (request.params.user.length < 2)) {
        throw new Error("No user")
    }

    console.log( request.params.user )
    response.json({
        "message": `${request.body.message} ${request.params.user}`
    })

})

app.use(ErrorLogger)

app.listen(3000)
console.log("Server started")