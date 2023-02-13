const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    profileImage: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isGroup: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

module.exports = Conversations