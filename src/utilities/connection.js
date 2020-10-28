const Sequelize = require('sequelize')

module.exports = new Sequelize( 'pgDB' , 'postgres', 'password', {
    host: 'postgres',
    dialect: 'postgres'
})