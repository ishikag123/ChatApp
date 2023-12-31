import React from "react";
import { useState } from "react";

export const Home = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginDialog, setLoginDialog] = useState(false);
  // const { setValidLogin } = useContext(AccountContext);
  // const [phNumber, setPhNumber] = useState("");
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          userName: userName,
          password: password,
          //phNumber: phNumber,
        }),

        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      if (response.status === 200) {
        setLoginDialog(true);
      }
    } catch (error) {
      console.log("error in register API", error.message);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify({
          //name,
          userName,
          password,
          //phNumber: phNumber,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.user) {
        //alert("Login successful!!");
        localStorage.setItem("token", data.user);
        //setValidLogin(true);
        //console.log(data.user);
        window.location.href = "/chat";
      } else {
        alert("Wrong login information!!");
        //setValidLogin(false);
      }
    } catch (error) {
      console.log("error in login API", error.message);
    }
  };

  return (
    <div className="flex bg-[#02807d] h-screen p-10">
      <div className="bg-[#f4f4f4] p-10 m-auto rounded-xl shadow-xl box-content h-84 w-96 flex flex-col gap-6 align-middle">
        <h1 className="font-bold text-2xl ml-auto mr-auto text-[#6b3c00]">
          Welcome!
        </h1>

        <form
          onSubmit={loginDialog ? loginUser : registerUser}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className={loginDialog ? "hidden" : "p-3 rounded-xl shadow-xl"}
            required={loginDialog ? false : true}
          />
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your Username"
            className="p-3 rounded-xl shadow-xl"
            required={true}
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="p-3 rounded-xl shadow-xl"
            required={true}
          />
          <input
            type="submit"
            value={loginDialog ? "Login" : "Register"}
            className="p-3 bg-[#ffb81e] rounded-2xl shadow-xl text-[#6b3c00] hover:bg-[#ffda89] cursor-pointer"
          />
          <button
            onClick={() => setLoginDialog(true)}
            className={
              loginDialog
                ? "hidden"
                : "p-3 bg-[#ffb81e] rounded-2xl shadow-xl text-[#6b3c00] hover:bg-[#ffda89] cursor-pointer"
            }
          >
            Already a user?
          </button>
        </form>
      </div>
    </div>
  );
};
