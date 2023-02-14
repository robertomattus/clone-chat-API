const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profileImage: {
        type: DataTypes.STRING
    },  
    isActive:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Users