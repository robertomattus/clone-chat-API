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
        type: DataTypes.String(31),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.String(18),
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
        type: DataTypes.String,
        allowNull: false
    }
})

module.exports = Users