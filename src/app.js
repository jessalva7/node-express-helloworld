//import express
const express=require('express')
const parser = require('body-parser')
const RequestLogger = require('./utilities/requestLogger')
const ErrorLogger = require('./utilities/errorLogger')
const morgan = require('morgan')
const helloWorldRouter = require('./routers/hello-world-router')
const userRouter = require('./routers/user-router')
const dbRouter = require('./routers/db-router')
const db = require('./utilities/connection')

const app = express()
app.use(parser.json())
app.use(RequestLogger)
app.use(morgan("combined"))
app.use("/hello", helloWorldRouter)
app.use("/user", userRouter)
app.use("/postgres",dbRouter)
app.use(ErrorLogger)

db.authenticate().then(() => 'database connected').catch(err=>console.log(err))

app.listen(3000)
console.log("Server started")