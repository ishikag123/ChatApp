import React from "react";
import { useState, useEffect, useContext } from "react";
import { ChatHeader } from "./ChatHeader";
import axios from "axios";
import { AccountContext } from "../../Context/AccountProvider";
import { Conversation } from "./Conversation";

export const Chats = ({ socket }) => {
  const { account, setAccount, setActiveUsers } = useContext(AccountContext);
  const [chatMenu, setChatMenu] = useState(false);
  const [users, setUsers] = useState([]);

  // const [account, setAccount] = useState({});

  function userInfo() {
    axios
      .get("http://localhost:5000/userinfo", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setAccount(res.data.user);
        console.log(res.data.user);
        console.log("Account", account);
      });
  }

  function getAllUsers() {
    axios.get("http://localhost:5000/getallusers").then((res) => {
      setUsers(res.data);
    });
  }

  useEffect(() => {
    userInfo();
    getAllUsers();
  }, []);

  // useEffect(() => {
  //   getAllUsers();
  // }, [account]);

  useEffect(() => {
    socket.emit("addUsers", account);
    console.log("Socket event 'addUsers' emitted in Chats component");
    socket.on("getUsers", (users) => {
      setActiveUsers(users);
      console.log("Socket event 'getUsers' received in Chats component");
      //console.log("Users", users);
    });
  }, [account]);

  return (
    <div className="flex flex-col bg-[#f4f4f4] h-full rounded-lg w-1/3 ">
      <ChatHeader />
      <div className="flex flex-col">
        {users.map(
          (user) =>
            user.userName !== account.userName && <Conversation user={user} />
        )}
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
        {/* <button
          className="text-2xl w-12 h-12 rounded-full bg-[#03d2cd]  relative shadow-lg ml-auto m-3 mt-auto"
          onClick={() => setChatMenu(!chatMenu)}
        >
          +
        </button> */}
      </div>
    </div>
  );
};
