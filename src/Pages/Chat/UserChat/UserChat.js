import React, { useContext } from "react";
import st from "./UserChat.module.scss";
import cl from "classnames";
import { TaskList } from "./TaskList/TaskList";
import { chatContext } from "../../../ChatContext";
import { Range } from "./Range/Range";
import { ChatBlock } from "./ChatBlock/ChatBlock";
import { ChatData } from "./ChatData/ChatData";

export const UserChat = ({ size, handleHide }) => {
  const { users } = useContext(chatContext);

  if (!users.length) return null;

  const onHandleHide = () => {
    if (window.innerWidth < 992) handleHide();
  };

  return (
    <div className={cl(st.chat, size < 992 && st.mobile)}>
      <div className={cl(st.chat_back)} onClick={onHandleHide}>
        <i className="fas fa-arrow-left" />
      </div>
      <div style={{ height: "auto"}}>
        <TaskList />
      </div>
      <div className="px-3" style={{ height: "86%" }}>
        <div style={{ height: "20%" }}>
          <Range />
        </div>
        <div style={{ height: "70%" }}>
          <ChatBlock />
        </div>
        <div className={cl(st.chat_data)}>
          <ChatData />
        </div>
      </div>
    </div>
  );
};
