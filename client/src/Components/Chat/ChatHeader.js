import React, { useState } from "react";
import { useContext, useEffect } from "react";
import img from "../../Assets/profile_pic.jpg";
import { AccountContext } from "../../Context/AccountProvider";
import axios from "axios";
//import {jwt} from "jsonwebtoken";

export const ChatHeader = ({ account }) => {
  const { validLogin } = useContext(AccountContext);
  // const [account, setAccount] = useState({});
  // function userInfo() {
  //   axios
  //     .get("http://localhost:5000/userinfo", {
  //       headers: {
  //         "x-access-token": localStorage.getItem("token"),
  //       },
  //     })
  //     .then((res) => {
  //       setAccount(res.data.user);
  //       //console.log(res);
  //     });
  // }

  // useEffect(() => {
  //   userInfo();
  // }, []);

  return (
    <div className="flex bg-[#ffb81e] items-center gap-2 shadow-lg relative w-full rounded-t-lg">
      {/* {validLogin ? userInfo : setAccount({})} */}
      <img src={img} alt="" className="h-16 w-16 rounded-full bg-white m-3" />
      <h1 className="font-bold text-[#6b3c00] text-xl">{account.userName}</h1>
    </div>
  );
};
