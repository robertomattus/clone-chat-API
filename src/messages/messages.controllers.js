const Messages = require('../models/messages.models')

const findAllMessagesByConversation = async (conversationId, userId) => {
    const data = await Messages.findAll({
        include: {
            model: Participants,
            where: {
                conversationId: conversationId,
                userId: userId
            }
        }
    })
    return data
}

module.exports = {
    findAllMessagesByConversation
}