import React from "react";
import { createContext, useEffect, useState } from "react";

export const AccountContext = createContext(null);

export const AccountProvider = ({ children }) => {
  const [validLogin, setValidLogin] = useState(false);
  const [account, setAccount] = useState({});
  return (
    <AccountContext.Provider
      value={{
        validLogin,
        setValidLogin,
        account,
        setAccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
