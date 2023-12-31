import React, { useEffect, useState, useContext } from "react";
import { Messages } from "./Messages";
import { MessageHeader } from "./MessageHeader";
import { AccountContext } from "../../Context/AccountProvider";
import { getConvos } from "../../Service/api";
import { EmptyMessageBox } from "./EmptyMessageBox";

export const MessageBox = ({ socket }) => {
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      console.log("person", person);
      console.log("account", account);
      const data = await getConvos({
        receiver: person.userName,
        sender: account.userName,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.userName]);
  return (
    <>
      <div className="flex flex-col rounded-lg w-2/3 bg-[#f4f4f4]">
        {Object.keys(person).length ? (
          <>
            <MessageHeader person={person} />

            <Messages socket={socket} conversation={conversation} />
            {/* <MessageFooter /> */}
          </>
        ) : (
          <EmptyMessageBox />
        )}
      </div>
    </>
  );
};
