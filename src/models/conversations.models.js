const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    profile_image: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_group: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

module.exports = Conversations