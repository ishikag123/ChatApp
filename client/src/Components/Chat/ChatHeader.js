import React from "react";
import { useContext } from "react";
import img from "../../Assets/profile_pic.jpg";
import { AccountContext } from "../../Context/AccountProvider";

export const ChatHeader = () => {
  const { account } = useContext(AccountContext);

  return (
    <div className="flex bg-[#ffb81e] items-center gap-2 shadow-lg relative w-full rounded-t-lg">
      {/* {validLogin ? userInfo : setAccount({})} */}
      <img src={img} alt="" className="h-16 w-16 rounded-full bg-white m-3" />
      <h1 className="font-bold text-[#6b3c00] text-xl">{account.userName}</h1>
    </div>
  );
};
