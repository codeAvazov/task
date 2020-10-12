import React, { useContext } from "react";
import st from "./ChatBlock.module.scss";
import cl from "classnames";
import { chatContext } from "../../../../ChatContext";
import { Msg } from "./Message/Msg";

export const ChatBlock = () => {
  const { msg } = useContext(chatContext);
  console.log(msg);

  return (
    <div className={cl(st.block)}>
      {msg.map((msg, i) => (
        <Msg msg={msg} key={i} />
      ))}
    </div>
  );
};
