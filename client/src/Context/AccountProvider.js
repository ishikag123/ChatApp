import React from "react";
import { createContext, useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

export const AccountProvider = ({ children }) => {
  const [validLogin, setValidLogin] = useState(false);
  const [account, setAccount] = useState({});
  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  // const socket = useRef();

  // useEffect(() => {
  //   socket.current = io("ws://localhost:8000");
  // }, []);

  return (
    <AccountContext.Provider
      value={{
        validLogin,
        setValidLogin,
        account,
        setAccount,
        person,
        setPerson,
        activeUsers,
        setActiveUsers,
        newMessageFlag,
        setNewMessageFlag,
        //socket,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
