import React from "react";
import img from "../../logo.svg";

export const MessageHeader = () => {
  return (
    <div className="flex bg-[#ffb81e] items-center gap-2 shadow-lg relative w-full rounded-t-lg">
      <img src={img} alt="" className="h-16 w-16 rounded-full bg-white m-2" />
      <h1 className="font-bold text-[#6b3c00] text-xl">User 2</h1>
    </div>
  );
};
