import React from "react";
import st from "./CourseInfo.module.scss";
import cl from "classnames";

export const CourseInfo = () => {
  const data = [
    { id: 1, title: "Kirish Html haqida tushunchalar. Amaliy" },
    { id: 1.1, title: "Boshlang`ich tushunchalar bo`yicha tushuncha" },
  ];
  return (
    <ul className={cl(st.course)}>
      <li className={cl(st.course_item)}>Frontend Development</li>
      {data.map((item) => (
        <li key={item.id} className={cl(st.course_item)}>
          {item.id} {item.title}
        </li>
      ))}
    </ul>
  );
};
