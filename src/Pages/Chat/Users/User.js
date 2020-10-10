import React, { useContext } from "react";
import st from "./User.module.scss";
import cl from "classnames";
import { chatContext } from "../../../ChatContext";

export const User = ({ user, id }) => {
  const { currentUser, setCurrentUser } = useContext(chatContext);
  return (
    <li
      className={cl(st.user, currentUser === id && st.active)}
      onClick={() => setCurrentUser(id)}
    >
      <div className={cl(st.user_logo)}>
        {user.name.first[0] + user.name.last[0].toUpperCase()}
      </div>
      <div className={cl(st.user_data)}>
        <div className={cl(st.user_data_name)}>
          {user.name.first} {user.name.last}
        </div>
        <div>Salom meni vazifamni tekshirib bering ustoz</div>
      </div>
      <div className={cl(st.user_date)}>
        <div>{new Date().getHours() + ":" + new Date().getMinutes()}</div>
        <div>
          <span class="badge badge-danger">1</span>
        </div>
      </div>
    </li>
  );
};
