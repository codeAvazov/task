import React, { useState } from "react";
import st from "./TaskList.module.scss";
import cl from "classnames";

export const TaskList = () => {
  const [marks, setMarks] = useState([
    { id: 1, isChecked: true, type: "Qiyin", mark: 5 },
    { id: 2, isChecked: true, type: "Oson", mark: 3 },
    { id: 3, isChecked: false, type: "Oson", mark: 0 },
    { id: 4, isChecked: false, type: "Qiyin", mark: 0 },
    { id: 5, isChecked: false, type: "Qiyin", mark: 0 },
    { id: 6, isChecked: false, type: "Qiyin", mark: 0 },
    { id: 7, isChecked: false, type: "Qiyin", mark: 0 },
    { id: 8, isChecked: true, type: "Qiyin", mark: 2 },
    { id: 9, isChecked: false, type: "Qiyin", mark: 0 },
    { id: 10, isChecked: true, type: "Qiyin", mark: 1 },
    { id: 11, isChecked: true, type: "Qiyin", mark: 0 },
    { id: 12, isChecked: false, type: "Qiyin", mark: 0 },
    { id: 13, isChecked: true, type: "Qiyin", mark: 0 },
    { id: 14, isChecked: true, type: "Qiyin", mark: 5 },
  ]);
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
