import React from "react";
import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import img from "../../logo.svg";

export const Chats = () => {
  const [chatMenu, setChatMenu] = useState(false);
  return (
    <div className="flex flex-col bg-[#f4f4f4] h-full rounded-lg w-1/3 ">
      <ChatHeader />
      <div className="flex gap-2 border-b-2 items-center p-2 hover:bg-[#bed8d7a1] cursor-pointer">
        <img src={img} alt="" className="h-10 w-10 rounded-full bg-white m-2" />
        <h1 className="font-bold text-base text-[#016966]">User 2</h1>
      </div>
      <div className="ml-auto m-3 mt-auto flex flex-col">
        <div
          className={
            chatMenu
              ? "p-6 flex flex-col gap-2 rounded-xl m-4  bg-[#bed8d7a1] relative shadow-lg"
              : "hidden"
          }
        >
          <h1>Create Group</h1>
          <h1>New Chat</h1>
        </div>
        <button
          className="text-2xl w-12 h-12 rounded-full bg-[#03d2cd]  relative shadow-lg ml-auto m-3 mt-auto"
          onClick={() => setChatMenu(!chatMenu)}
        >
          +
        </button>
      </div>
    </div>
  );
};
