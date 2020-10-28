const Sequelize = require('sequelize')

module.exports = new Sequelize( 'pgDB' , 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
})