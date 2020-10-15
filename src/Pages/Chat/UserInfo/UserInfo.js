import React, { useContext, useState } from "react";
import st from "./UserInfo.module.scss";
import cl from "classnames";
import { chatContext } from "../../../ChatContext";
import { CourseInfo } from "./KursInfo/CourseInfo";
import { TaskHistory } from "./TaskHistory/TaskHistory";

export const UserInfo = ({ size, handleShow, handleHide }) => {
  const {
    currentUser,
    users,
    openCourse,
    setOpenCourse,
    openTask,
    setOpenTask,
  } = useContext(chatContext);
  const [mark, setMark] = useState(3);
  let icon = new Array(5).fill("fas fa-star");

  if (!users.length) return null;
  let user = users[currentUser];
  let fullName = user.name.first + " " + user.name.last;

  const onHandleShow = () => {
    if (window.innerWidth < 992) handleShow();
    setOpenCourse(false);
    setOpenTask(false);
  };

  const onHandleHide = () => {
    if (window.innerWidth < 992) handleHide();
  };

  return (
    <div className={cl(st.info, size < 992 && st.mobile)}>
      <div className={cl(st.info_back)} onClick={onHandleHide}>
        <i className="fas fa-arrow-left" />
      </div>
      <div className={cl(st.info_logo)}>
        {user.name.first[0] + user.name.last[0].toUpperCase()}
      </div>
      <div className={cl(st.info_name)}>{fullName}</div>
      <div className={cl(st.info_icons)}>
        <div>
          <div
            className={cl(st.info_icons_icon)}
            onClick={() => onHandleShow()}
          >
            <i className="far fa-comment-alt"></i>
          </div>
          <div className={cl(st.info_icons_label)}>Chatga o`tish</div>
        </div>
        <div>
          <div
            className={cl(st.info_icons_icon)}
            onClick={() => {
              setOpenCourse(!openCourse);
              openTask && setOpenTask(!openTask);
            }}
          >
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <div className={cl(st.info_icons_label)}>Kurs info</div>
          {openCourse && (
            <section className={cl(st.info_icons_menu)}>
              <CourseInfo />
            </section>
          )}
        </div>
        <div>
          <div
            className={cl(st.info_icons_icon)}
            onClick={() => {
              setOpenTask(!openTask);
              openCourse && setOpenCourse(!openCourse);
            }}
          >
            <i className="far fa-calendar-minus"></i>
          </div>
          <div className={cl(st.info_icons_label)}>Task history</div>
          {openTask && (
            <section className={cl(st.task)}>
              <TaskHistory />
            </section>
          )}
        </div>
      </div>
      <div className={cl(st.info_stars, "mb-3")}>
        {icon.map((star, i) => (
          <div
            className={cl(st.info_stars_star, mark > i && "text-warning")}
            key={i}
            onClick={() => setMark(i + 1)}
          >
            <i className={star} />
          </div>
        ))}
      </div>
      <div className="row m-0 px-3 my-3 w-100" id={cl(st.btn)}>
        <div className="col-md-6 p-0 px-1">
          <button
            type="button"
            className="btn btn-success btn-block rounded-0 py-2 my-1 d-flex align-items-center justify-content-center"
          >
            <i className="fas fa-check-double"></i>
          </button>
        </div>
        <div className="col-md-6 p-0 px-1">
          <button
            type="button"
            className="btn btn-danger btn-block rounded-0 py-2 my-1 d-flex align-items-center justify-content-center"
          >
            <i className="fas fa-exclamation-triangle"></i>
          </button>
        </div>
      </div>
      <div
        className="border border-bottom-0 mx-auto"
        style={{ width: "85%", margin: "1rem 0" }}
      ></div>
      <div className={cl(st.info_label, "p-3")}>
        <div className={cl(st.info_label_title)}>
          2. Fill yordamida berilgan animatsiyani yarating.
        </div>
        <p>
          Kiritilgan stringning berilgan indexdan boshlab qolgan qismini chop
          qiluvchi dastur yozing. Masalan: String: android,index=2 Natija:
          “droid”;
        </p>
      </div>
      <div className={cl(st.info_file)}>
        <div>
          <i className="fas fa-cloud-download-alt"></i>
        </div>
        <div>2-topshiriq savol.jpg</div>
      </div>
    </div>
  );
};
