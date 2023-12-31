import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    convoId: {
      type: String,
    },
    sender: {
      type: String,
    },
    receiver: {
      type: String,
    },
    type: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const message = mongoose.model("Message", messageSchema);
export default message;
