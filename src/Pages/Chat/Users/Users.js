import React, { useContext } from "react";
import st from "./Users.module.scss";
import cl from "classnames";
import { chatContext } from "../../../ChatContext";
import { User } from "./User";

export const Users = () => {
  const { users, select, setSelect, querySearch, setQuerySearch } = useContext(
    chatContext
  );

  return (
    <div className={cl(st.listMenu)}>
      <div className={cl(st.listMenu_top)}>
        <div className={cl(st.listMenu_top_categories)}>
          <div
            className={select && cl(st.active)}
            onClick={() => setSelect(true)}
          >
            Vazifalar<span class="badge badge-danger">{users.length}</span>
          </div>
          <div
            className={!select && cl(st.active)}
            onClick={() => setSelect(false)}
          >
            Chat<span class="badge badge-danger">{users.length - 5}</span>
          </div>
        </div>
        <div className={cl(st.listMenu_top_search)}>
          <input
            type="text"
            placeholder="Search..."
            value={querySearch}
            onChange={(e) => setQuerySearch(e.target.value)}
            className={cl("form-control", st.listMenu_top_search_input)}
          />
          <div>
            <i className="fas fa-search" />
          </div>
          <div>
            <i className="fas fa-sort" />
          </div>
        </div>
      </div>
      {users.length ? (
        <ul className={cl(st.listMenu_users)}>
          {users.map((user, i) => (
            <User key={i} user={user} id={i} />
          ))}
        </ul>
      ) : (
        <h2 className="text-danger">No users</h2>
      )}
    </div>
  );
};
