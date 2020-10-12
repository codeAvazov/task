import React from "react";
import st from "./Chat.module.scss";
import cl from "classnames";
import { Users } from "./Users/Users";
import { UserInfo } from "./UserInfo/UserInfo";
import { UserChat } from "./UserChat/UserChat";

export const Chat = () => {
  return (
    <div className={cl(st.chat)}>
      <div className={cl(st.chat_title, "text-uppercase")}>
        vazifalar va chat
      </div>
      <div className="row m-0" id={cl(st.row)}>
        <div className="col-lg-3 col-sm-12 p-0">
          <Users />
        </div>
        <div className="col-lg-6 col-sm-12 p-0">
          <UserChat />
        </div>
        <div className="col-lg-3 col-sm-12 p-0">
          <UserInfo />
        </div>
      </div>
    </div>
  );
};
