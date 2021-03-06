import React, { useState } from "react";
import st from "./Chat.module.scss";
import cl from "classnames";
import { Users } from "./Users/Users";
import { UserInfo } from "./UserInfo/UserInfo";
import { UserChat } from "./UserChat/UserChat";

export const Chat = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [show, setShow] = useState(1);

  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
    if (window.innerWidth > 992) {
      setShow(1);
    }
  });

  const handleShow = () => {
    setShow(show + 1);
  };

  const handleHide = () => {
    setShow(show - 1);
  };

  return (
    <div className={cl(st.chat)}>
      <div className={cl(st.chat_title, "text-uppercase")}>
        vazifalar va chat
      </div>
      {size < 992 ? (
        <div className="row m-0" id={cl(st.row)}>
          {show === 1 ? (
            <div className="col-sm-12 p-0">
              <Users handleShow={handleShow} />
            </div>
          ) : show === 2 ? (
            <div className="col-sm-12 p-0">
              <UserInfo handleHide={handleHide} handleShow={handleShow} />
            </div>
          ) : (
            <div className="col-sm-12 p-0">
              <UserChat handleHide={handleHide} />
            </div>
          )}
        </div>
      ) : (
        <div className="row m-0" id={cl(st.row)}>
          <div className="col-lg-3 p-0">
            <Users />
          </div>
          <div className="col-lg-6 p-0">
            <UserChat />
          </div>
          <div className="col-lg-3 p-0">
            <UserInfo />
          </div>
        </div>
      )}
    </div>
  );
};
