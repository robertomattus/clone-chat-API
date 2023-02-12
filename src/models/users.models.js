const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
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
    profile_image: {
        type: DataTypes.STRING
    },  
    is_active:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    phone: {
        type: DataTypes.String,
        allowNull: false
    }
})

module.exports = Users