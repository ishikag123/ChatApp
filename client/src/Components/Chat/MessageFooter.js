import React from "react";

export const MessageFooter = ({ sendText, value, setValue }) => {
  return (
    <div className="flex bg-[#ffb81e] items-center gap-2 shadow-lg relative w-full rounded-b-lg p-4">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        //onKeyPress={(e) => sendText(e)}
        value={value}
        placeholder="Type message..."
        className="w-full rounded-lg p-4"
      />
      <button
        className="bg-[#03d2cd] rounded-lg p-4 hover:bg-[#8bfbfa]"
        onClick={() => sendText()}
      >
        Send
      </button>
    </div>
  );
};
