const Sequelize = require('sequelize');
const dbConnection = require('../utilities/connection');


userEntity = dbConnection.define(
    'user',
    {
        username:{
            type:Sequelize.STRING,
            allowNull: false,
            primaryKey:true
        },
        full_name:{
            type:Sequelize.STRING,
            allowNull: false
        },
        country_code:{
            type:Sequelize.STRING(2),
            allowNull: false
        },
        verified:{
            type:Sequelize.BOOLEAN,
            defaultValue: false
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });


module.exports = userEntity