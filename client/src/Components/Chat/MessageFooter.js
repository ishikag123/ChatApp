import React from "react";

export const MessageFooter = () => {
  return (
    <div className="flex bg-[#ffb81e] items-center gap-2 shadow-lg relative w-full rounded-b-lg p-4">
      <input
        type="text"
        name=""
        id=""
        placeholder="Type message..."
        className="w-full rounded-lg p-4"
      />
      <button className="bg-[#03d2cd] rounded-lg p-4 hover:bg-[#8bfbfa]">
        Send
      </button>
    </div>
  );
};
