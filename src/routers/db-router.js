const express = require('express');
const dbRouter = express.Router();

const dbConnection = require('../utilities/connection');

dbRouter.post("/setupDB", async(_req,res,next) => {
    try{
        let dbCreation = await dbConnection.sync({force:true})
        if( dbCreation ) {
            res.send("DB Created")
        }
    }
    catch(error){
        console.log(error);
        next(error);
    }
})



module.exports = dbRouter