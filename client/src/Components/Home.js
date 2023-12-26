import React from "react";

export const Home = () => {
  return (
    <div className="flex bg-[#02807d] h-screen p-10">
      <div className="bg-[#f4f4f4] p-10 m-auto rounded-xl shadow-xl box-content h-80 w-96 flex flex-col gap-4 align-middle">
        <h1 className="font-bold text-2xl ml-auto mr-auto text-[#6b3c00]">
          Welcome!
        </h1>
        <div className="flex flex-col gap-2 mt-auto mb-auto">
          <input
            type="number"
            name=""
            id=""
            placeholder="Enter your number"
            className="p-3 rounded-xl shadow-xl"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your name"
            className="p-3 rounded-xl shadow-xl"
          />
        </div>
        <button className="p-3 bg-[#ffb81e] rounded-2xl shadow-xl text-[#6b3c00] mt-auto hover:bg-[#ffda89]">
          Login
        </button>
      </div>
    </div>
  );
};
