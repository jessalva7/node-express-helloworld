const fs = require('fs');
const ErrorLogger = (err, req, res, next) => {

    var logMessage = `${new Date().toISOString()}-${req.method}-${req.url}\n`

    if (err) {
        fs.appendFile(__dirname + 'ErrorLogger.txt', logMessage, (err) => {
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