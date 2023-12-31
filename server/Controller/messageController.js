import Message from "../Models/message.js";
import Convo from "../Models/conversation.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    await Convo.findByIdAndUpdate(req.body.convoId, {
      message: req.body.text,
    });
    return res.status(200).json("Message sent successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getMessage = async (req, res) => {
  try {
    const message = await Message.find({ convoId: req.params.id });
    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
