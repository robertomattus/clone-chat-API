const {DataTypes} = require('sequelize')
const db = require('../utils/database')
const Conversations = require('./conversations.models')
const Users = require('./users.models')

const Participants = db.define('participants', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    conversation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Conversations,
            key: 'id'
        }
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

module.exports = Participants