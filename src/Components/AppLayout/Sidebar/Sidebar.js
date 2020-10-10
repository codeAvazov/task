import React, { useState } from "react";
import st from "./Sidebar.module.scss";
import cl from "classnames";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const data = [
    { title: "Dashboard", icon: "far fa-chart-bar", to: "/dashboard" },
    { title: "Barcha Kurslar", icon: "fas fa-layer-group", to: "/allcourses" },
    {
      title: "Vazifalar va Chat",
      icon: "far fa-comment-alt",
      to: "/taskandchat",
    },
    { title: "Qurilmalar", icon: "fas fa-laptop-house", to: "/devises" },
    { title: "Zoom va Chat", icon: "fas fa-video", to: "/zoom" },
    { title: "Sozlamalar", icon: "fas fa-cog", to: "/settings" },
    { title: "Home.pdp.uz", icon: "fas fa-arrow-up", to: "/home", down: true },
    { title: "Chiqish", icon: "fas fa-power-off", to: "/exit" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  
  window.addEventListener('resize', () => {
    setIsOpen(false);
  })

  return (
    <div>
      <div className={cl(st.sidebar, isOpen && st.open)}>
        <div className={cl(st.sidebar_close)} onClick={() => setIsOpen(false)}>
          <i className="fas fa-arrow-left" />
        </div>
        <div
          className={cl(st.sidebar_open)}
          onClick={() => setIsOpen(true)}
          style={{ display: isOpen ? "none" : "flex" }}
        >
          <i className="fas fa-arrow-right" />
        </div>
        <NavLink className={cl(st.sidebar_logo)} to="/">
          <img src="https://pdp.uz/assets/icons/pdpuz-logo.svg" alt="#" />
        </NavLink>

        <ul className={cl(st.sidebar_menu)}>
          {data.map((menu, i) => (
            <li
              key={i}
              className={cl(st.sidebar_menu_item, menu.down && st.down)}
            >
              <NavLink
                to={menu.to}
                className={cl(st.sidebar_menu_item_link)}
                activeClassName={st.active}
              >
                <div className="d-flex align-items-center">
                  <div>
                    <i
                      className={cl(st.sidebar_menu_item_link_icon, menu.icon)}
                    />
                  </div>
                  <div>{menu.title}</div>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
