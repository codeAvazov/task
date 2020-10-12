import React, { useEffect, useState } from "react";
import st from "./Range.module.scss";
import cl from "classnames";

export const Range = () => {
  const [range, setRange] = useState(0);
  const icons = [
    { icon: "fas fa-frown", color: "#DE1E3A", interval: [0, 13] },
    { icon: "fas fa-meh", color: "#FFB436", interval: [14, 53] },
    { icon: "fas fa-smile", color: "#00B533", interval: [54, 82] },
    { icon: "fas fa-grin", color: "#00B533", interval: [83, 100] },
  ];
  const [icon, setIcon] = useState({});
  useEffect(() => {
    if (range >= icons[0].interval[0] && range <= icons[0].interval[1]) {
      setIcon(icons[0]);
    }
    if (range >= icons[1].interval[0] && range <= icons[1].interval[1]) {
      setIcon(icons[1]);
    }
    if (range >= icons[2].interval[0] && range <= icons[2].interval[1]) {
      setIcon(icons[2]);
    }
    if (range >= icons[3].interval[0] && range <= icons[3].interval[1]) {
      setIcon(icons[3]);
    }
  }, [range]);

  return (
    <div className="row m-0 p-0 py-2 border-bottom mx-1">
      <div
        className="col-5 p-0 my-2 border-right"
        style={{ fontWeight: "500" }}
      >
        Murakkab animatsiya yaratish
      </div>
      <div className="col-7 p-0 px-4 d-flex align-items-center justify-content-center flex-column">
        <div className={cl(st.rating)}>
          <div>O`quvchini reytingi</div>
          <div>{range}%</div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className={cl(st.iconShadow)} style={{boxShadow : `0 0 15px ${icon.color+'70'}`}}>
            <i
              className={cl(st.icon, icon.icon)}
              style={{
                color: icon.color,
              }}
            />
          </div>
          <div>
            <input
              type="range"
              className={cl(st.range, "ml-2")}
              value={range}
              max="100"
              min="0"
              onChange={(e) => setRange(e.target.value)}
              style={{ background: icon.color}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
