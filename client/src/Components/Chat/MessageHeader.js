import React from "react";
import img from "../../Assets/profile_pic.jpg";
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";

export const MessageHeader = ({ person }) => {
  const { activeUsers } = useContext(AccountContext);
  return (
    <div className="flex bg-[#ffb81e] items-center gap-2 shadow-lg relative w-full rounded-t-lg">
      <img src={img} alt="" className="h-16 w-16 rounded-full bg-white m-3" />
      <h1 className="font-bold text-[#6b3c00] text-xl">{person.userName}</h1>
    </div>
  );
};
