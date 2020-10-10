import React from "react";
import st from "./Navbar.module.scss";
import cl from "classnames";

export const Navbar = ({ user }) => {


  return (
    <div>
      <div className={cl(st.navbar)}>
        <div className={cl(st.navbar_profile)}>
          <div className={cl(st.navbar_profile_username)}> {user.name} </div>
          <div className={cl(st.navbar_profile_icon)}>
            <i class="far fa-user" />
          </div>
          <div className={cl(st.navbar_profile_icon)}>
            <i class="far fa-bell" />
          </div>
        </div>
      </div>
    </div>
  );
};
