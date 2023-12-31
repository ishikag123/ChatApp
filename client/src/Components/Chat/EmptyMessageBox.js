import React from "react";
import Typed from "react-typed";
import img from "../../Assets/chat.png";

export const EmptyMessageBox = () => {
  return (
    <div className="bg-gradient-to-t from-slate-100 via-amber-100 to-orange-300 h-full p-4 flex flex-col gap-2 w-full rounded-lg">
      <Typed
        className="text-[#2fb7b4] md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 p-4 mt-auto"
        strings={["Welcome!", "Let's have a chat!!"]}
        typeSpeed={80}
        backSpeed={90}
        loop
      />
      <img
        src={img}
        className="h-96 w-96 ml-auto mt-auto max-h-full max-w-full"
      />
    </div>
  );
};
