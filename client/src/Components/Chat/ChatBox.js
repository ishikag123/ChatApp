import React from "react";
import { Chats } from "./Chats";
import { MessageBox } from "./MessageBox";

export const ChatBox = () => {
  return (
    // <div className="h-screen ">
    <div className="flex flex-row gap-2 p-2 bg-[#02807d] h-screen">
      <Chats />
      <MessageBox />
    </div>
    // </div>
  );
};
