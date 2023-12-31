import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { newConvo, getConvo, newMessage, getConvos } from "../../Service/api";
import img from "../../Assets/profile_pic.jpg";
import { AccountContext } from "../../Context/AccountProvider";

export const Conversation = ({ user }) => {
  const { account, setPerson, person, newMessageFlag } =
    useContext(AccountContext);
  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConvoDetails = async () => {
      const data = await getConvos({
        receiver: user.userName,
        sender: account.userName,
      });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConvoDetails();
  }, [newMessageFlag]);

  const getUser = async () => {
    setPerson(user);
    await newConvo({ receiver: user.userName, sender: account.userName });
  };
  return (
    <div
      className="flex gap-2 border-b-2 items-center p-2 hover:bg-[#bed8d7a1] cursor-pointer"
      onClick={() => getUser()}
    >
      <img src={img} alt="" className="h-10 w-10 rounded-full bg-white m-2" />
      <h1 className="font-bold text-base text-[#016966]">{user.userName}</h1>
    </div>
  );
};
