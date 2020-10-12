import React, { useContext } from "react";
import st from "./TaskHistory.module.scss";
import cl from "classnames";
import { chatContext } from "../../../../ChatContext";

export const TaskHistory = () => {
  const { taskHistory, setTaskHistory } = useContext(chatContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskHistory({ ...taskHistory, [name]: value });
  };
  return (
    <div className={cl(st.task)}>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <select className="form-control" name="kurs" onChange={handleChange}>
            <option> Kursni tanlang </option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control" name="modul" onChange={handleChange}>
            <option> Modul tanlang </option>
          </select>
        </div>
        <div className="form-group" name="dars" onChange={handleChange}>
          <select className="form-control">
            <option> Dars tanlang </option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-success btn-block rounded-0 font-weight-bold"
        >
          Saqlash
        </button>
      </form>
    </div>
  );
};
