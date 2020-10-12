import React, { useContext } from "react";
import { chatContext } from "../../../../ChatContext";
import st from "./ChatData.module.scss";
import cl from "classnames";

export const ChatData = () => {
  const { messageData, setMessageData } = useContext(chatContext);
  return (
    <div className={cl(st.form)}>
      <div className={cl(st.form_share)}><i className="far fa-file"></i></div>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id={cl(st.input)}
            value={messageData}
            onChange={(e) => setMessageData(e.target.value)}
            placeholder="Text..."
          />
        </div>
        <button type="submit" className="btn btn-sm">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};
