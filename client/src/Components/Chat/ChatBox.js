import React from "react";
import { Chats } from "./Chats";
import { MessageBox } from "./MessageBox";
import { AccountProvider } from "../../Context/AccountProvider";

export const ChatBox = ({ socket }) => {
  return (
    // <div className="h-screen ">
    <div className="flex flex-row gap-2 p-2 bg-[#02807d] h-screen">
      <AccountProvider>
        <Chats socket={socket} />
        <MessageBox socket={socket} />
      </AccountProvider>
    </div>
    // </div>
  );
};
