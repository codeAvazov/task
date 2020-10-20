import Axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Msg } from "./Service/Messages";

// API_URL
const api = "https://randomuser.me/api/?results=50";

// Context API
export const chatContext = createContext();

export const ChatContext = ({ children }) => {
  // State
  const [users, setUsers] = useState([]);
  const [select, setSelect] = useState(true);
  const [querySearch, setQuerySearch] = useState("");
  const [currentUser, setCurrentUser] = useState(0);
  const [openCourse, setOpenCourse] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const [taskHistory, setTaskHistory] = useState({
    kurs: "",
    modul: "",
    dars: "",
  });
  const [messageData, setMessageData] = useState("");
  const [msg, setMsg] = useState(Msg());

  // getUser request
  useEffect(() => {
    Axios.get(api)
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((e) => console.log(e));
  }, []);

  // Search user 
  useEffect(() => {
    searchUser();
  }, [querySearch]);

  const searchUser = () => {
    let userList = [];
    if (querySearch === "") userList = users;
    else {
      userList = users.filter((user) => {
        let fullName = user.name.first + user.name.last;
        return fullName.toLowerCase().includes(querySearch.toLowerCase());
      });
    }
    return userList;
  };

  return (
    <chatContext.Provider
      value={{
        users: searchUser(),
        select,
        setSelect,
        querySearch,
        setQuerySearch,
        currentUser,
        setCurrentUser,
        openCourse,
        setOpenCourse,
        openTask,
        setOpenTask,
        taskHistory,
        setTaskHistory,
        setMsg,
        setMessageData,
        messageData,
        msg,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};
