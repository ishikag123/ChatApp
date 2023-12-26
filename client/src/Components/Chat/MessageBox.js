import React from "react";
import { Messages } from "./Messages";
import { MessageHeader } from "./MessageHeader";
import { MessageFooter } from "./MessageFooter";

export const MessageBox = () => {
  return (
    <div className="flex flex-col rounded-lg w-2/3 bg-[#f4f4f4]">
      <MessageHeader />
      <Messages />
      <MessageFooter />
    </div>
  );
};
