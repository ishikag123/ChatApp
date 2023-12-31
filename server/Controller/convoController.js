import Conversation from "../Models/conversation.js";

export const newConvo = async (req, res) => {
  try {
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const exist = await Conversation.findOne({
      members: { $all: [receiver, sender] },
    });
    if (exist) {
      res.status(200).json("Conversation already exists");
      return;
    }
    const newConvo = new Conversation({
      members: [receiver, sender],
    });
    await newConvo.save();
    return res.status(200).json(newConvo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getConvo = async (req, res) => {
  try {
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    console.log("Query Parameters:", sender, receiver);
    const convo = await Conversation.findOne({
      members: { $all: [receiver, sender] },
    });
    console.log("Convo found", convo);
    return res.status(200).json(convo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
