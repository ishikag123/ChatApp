import React, { useEffect, useRef } from "react";
import { newMessage, getMessage } from "../../Service/api";
import { useState, useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { MessageFooter } from "./MessageFooter";

export const Messages = ({ socket, conversation }) => {
  const scrollRef = useRef();

  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [incomingMsg, setIncomingMsg] = useState(null);

  const { account, newMessageFlag, setNewMessageFlag, person } =
    useContext(AccountContext);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      setIncomingMsg({ ...data, createdAt: Date.now() });
    });
  }, []);

  useEffect(() => {
    const getMessageDetails = async () => {
      const data = await getMessage(conversation?._id);
      setMessages(data);
    };
    conversation?._id && getMessageDetails();
  }, [person.userName, conversation?._id, newMessageFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  useEffect(() => {
    incomingMsg &&
      conversation?.members?.includes(incomingMsg.sender) &&
      setMessages((prev) => [...prev, incomingMsg]);
  }, [incomingMsg, conversation]);

  const sendText = async () => {
    let message = {};
    message = {
      sender: account.userName,
      receiver: person.userName,
      convoId: conversation?._id,
      type: "text",
      text: value,
    };
    console.log(message);
    socket.emit("sendMessage", message);
    await newMessage(message);
    setValue("");
    setNewMessageFlag(!newMessageFlag);
  };

  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-amber-100 to-orange-200 h-full p-4 flex flex-col gap-2 w-full">
        {messages &&
          messages.map((message) => (
            <>
              <div
                className={
                  account.userName === message.sender
                    ? "p-2 rounded-xl bg-[#f98d00] ml-auto shadow-lg"
                    : "p-2 rounded-xl bg-[#03d2cd] mr-auto shadow-lg"
                }
              >
                {message.text}
                {/* <h5 className="text-xs ml-auto">{message.createdAt}</h5> */}
              </div>
            </>
          ))}
      </div>
      {person ? (
        <MessageFooter sendText={sendText} setValue={setValue} value={value} />
      ) : (
        <></>
      )}
    </>
  );
};
