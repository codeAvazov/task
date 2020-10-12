import React, { useContext } from "react";
import st from "./UserChat.module.scss";
import cl from "classnames";
import { TaskList } from "./TaskList/TaskList";
import { chatContext } from "../../../ChatContext";
import { Range } from "./Range/Range";
import { ChatBlock } from "./ChatBlock/ChatBlock";
import { ChatData } from "./ChatData/ChatData";
export const UserChat = () => {
  const { users } = useContext(chatContext);

  if (!users.length) return null;

  return (
    <div className={cl(st.chat)}>
      <div>
        <TaskList />
      </div>
      <div className="px-3" style={{ height: "85%" }}>
        <div>
          <Range />
        </div>
        <div style={{ height: "75%" }}>
          <ChatBlock />
        </div>
        <div
          style={{
            height: "8%",
            marginTop : '1%',
          }}
        >
          <ChatData />
        </div>
      </div>
    </div>
  );
};
