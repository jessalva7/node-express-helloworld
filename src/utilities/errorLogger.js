const fs = require('fs');
const ErrorLogger = (err, req, res, next) => {

    if (err) {
        let logMessage = `${new Date().toISOString()}-${req.url}-${err.status}-${err.message}\n`
        fs.appendFile( './resources/ErrorLogger.txt', logMessage, (err) => {
            if (err) {
                console.log("Not able to log error message")
            }
        })
    
        if (err.status) {
            res.status(err.status)
        } else {
            res.status(500)
        }
        res.json({
            "message":err.message
        })

    }


    
    next();
}

module.exports = ErrorLogger