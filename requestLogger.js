const fs = require('fs');
const RequestLogger = (req, _res, next) => {

    console.log(" Request Method ", req.method)
    console.log(" Request Url is ", req.url)

    var logMessage = `${new Date().toISOString()}-${req.method}-${req.url}\n`
    fs.appendFile('RequestLogger.txt', logMessage, (err) => {
        if (err) {
            return next(err);
        }
    })
    next();
}

module.exports = RequestLogger