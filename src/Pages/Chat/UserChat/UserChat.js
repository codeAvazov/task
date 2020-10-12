import React, { useContext } from "react";
import st from "./UserChat.module.scss";
import cl from "classnames";
import { TaskList } from "./TaskList/TaskList";
import { chatContext } from "../../../ChatContext";
import { Range } from "./Range/Range";
export const UserChat = () => {
  const { users } = useContext(chatContext);

  if (!users.length) return null;

  return (
    <div className={cl(st.chat)}>
      <div>
        <TaskList />
      </div>
      <div>
        <Range />
      </div>
      <div>
        
      </div>
    </div>
  );
};
