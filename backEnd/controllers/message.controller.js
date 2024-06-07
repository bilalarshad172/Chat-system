import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js'

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id:receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
        participants:{$all:[senderId , receiverId]}
        })

        if (!conversation) {
            conversation = await Conversation.create({
            participants:[senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        res.status(201).json(newMessage);

        // This will run one by one which is not good practice.
        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()]); //this will run in parallel.

    } catch (error) {
        console.log("Error in message Controller", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
};