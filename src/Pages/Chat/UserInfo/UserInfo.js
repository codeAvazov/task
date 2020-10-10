import React, { useContext } from "react";
import st from "./UserInfo.module.scss";
import cl from "classnames";
import { chatContext } from "../../../ChatContext";

export const UserInfo = () => {
  const { currentUser, users } = useContext(chatContext);

  if (!users.length) return null;
  let user = users[currentUser];
  let fullName = user.name.first + " " + user.name.last;

  return (
    <div className={cl(st.info)}>
      <div className={cl(st.info_logo)}>
        {user.name.first[0] + user.name.last[0].toUpperCase()}
      </div>
      <div className={cl(st.info_name)}>{fullName}</div>
      <div className={cl(st.info_icons)}>
        <div>
          <div className={cl(st.info_icons_icon)}>
            <i className="far fa-comment-alt"></i>
          </div>
          <div className={cl(st.info_icons_label)}>Chatga o`tish</div>
        </div>
        <div>
          <div className={cl(st.info_icons_icon)}>
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <div className={cl(st.info_icons_label)}>Kurs info</div>
        </div>
        <div>
          <div className={cl(st.info_icons_icon)}>
            <i className="far fa-calendar-minus"></i>
          </div>
          <div className={cl(st.info_icons_label)}>Task history</div>
        </div>
      </div>
    </div>
  );
};
