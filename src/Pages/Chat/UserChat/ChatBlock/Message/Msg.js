import React from "react";
import st from "./Msg.module.scss";
import cl from "classnames";

export const Msg = ({ msg }) => {
  return (
    <div className={cl(st.msg, msg.author === "Mentor" && st.mentor)}>
      {msg.type === "file" && (
        <div className={cl(st.msg_file)}>
          <div className={cl(st.msg_file_icon)}>
            <i className="fas fa-cloud-download-alt" />
          </div>
          <div style={{fontSize : '14px', marginLeft : '10px'}}>
            <div style={{fontWeight : '600'}}>{msg.task}</div>
            <div>{msg.size}</div>
          </div>
        </div>
      )}
      <div style={{fontSize : '14px'}}>{msg.title}</div>
      <div className={cl(st.msg_date)}>
          {msg.author === 'Mentor' && msg.author}{' '}{msg.date}
      </div>
    </div>
  );
};
