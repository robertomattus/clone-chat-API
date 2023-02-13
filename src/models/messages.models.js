const {DataTypes} = require('sequelize')
const db = require('../utils/database')
const Participants = require('./participants.models')

const Messages = db.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    participantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Participants,
            key: 'id'
        }
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Messages