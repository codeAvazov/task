import React, { useState } from "react";
import st from "./TaskList.module.scss";
import cl from "classnames";
import { Marsk } from "../../../../Service/Marks";

export const TaskList = () => {
  const [marks, setMarks] = useState(Marsk);
  const [currentTask, setCurrentTask] = useState(1);

  const [showTask, setShowTask] = useState([1, 2, 3, 4, 5]);
  const incrShowTask = () => {
    if (showTask[4] < marks.length) {
      setShowTask(showTask.map((k) => k + 1));
    }
  };
  const decShowTask = () => {
    if (showTask[0] > 1) {
      setShowTask(showTask.map((k) => k - 1));
    }
  };

  return (
    <div className={cl(st.chat)}>
      <div className={cl(st.chat_taskList)}>
        {marks.map((mark) => {
          if (showTask.includes(mark.id))
            return (
              <div
                key={mark.id}
                className={cl(st.chat_taskList_task)}
                style={currentTask === mark.id ? { opacity: "1" } : {}}
                onClick={() => setCurrentTask(mark.id)}
              >
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "32px",
                  }}
                >
                  {mark.id}
                </div>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ fontSize: "14px", lineHeight: "26px" }}
                >
                  <i
                    class="fas fa-star mr-1"
                    style={
                      mark.isChecked ? { color: "gold" } : { color: "#dedede" }
                    }
                  />
                  <span>{mark.mark}</span>
                </div>
                <div
                  className="text-uppercase font-weight-bold"
                  style={{ fontSize: "10px" }}
                >
                  {mark.type}
                </div>
              </div>
            );
        })}
        <div className={cl(st.chat_taskList_btns)}>
          <div onClick={decShowTask}>
            <i
              class="fas fa-angle-left"
              style={
                showTask[0] === 1 ? { color: "#fcfcfc" } : { color: "#000" }
              }
            />
          </div>
          <div onClick={incrShowTask}>
            <i
              class="fas fa-angle-right"
              style={
                showTask[4] === marks.length
                  ? { color: "#FCFCFC" }
                  : { color: "#000" }
              }
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
