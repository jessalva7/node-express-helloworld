const Sequelize = require('sequelize');
const dbConnection = require('../utilities/connection');


userEntity = dbConnection.define(
    'user',
    {
        full_name:{
            type:Sequelize.STRING,
            allowNull: false
        },
        created_at:{
            type:Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        country_code:{
            type:Sequelize.STRING(2),
            allowNull: false
        },
        verified:{
            type:Sequelize.BOOLEAN
        },
        id:{
            type:Sequelize.UUID,
            primaryKey:true,
            defaultValue: Sequelize.UUIDV4
        }
    });


module.exports = userEntity