const dbRepository = require('../utilities/connection');

let controller = {
}

controller.setupData = async(_req,res,next) => {

    try{
        let dbCreation = await dbRepository.sync({force:true})
        if( dbCreation ) {
            res.status(200)
            res.send("DB Created")
        }
    }
    catch(error){
        error.status = 500
        next(error);
    }
    

}


module.exports = controller;