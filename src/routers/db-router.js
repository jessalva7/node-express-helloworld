const express = require('express');
const dbController = require('../service/db-controller')

const dbRouter = express.Router();


dbRouter.post("/setupDB", dbController.setupData)

module.exports = dbRouter