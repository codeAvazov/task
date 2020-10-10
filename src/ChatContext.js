import Axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const api = "https://randomuser.me/api/?results=50";

export const chatContext = createContext();

export const ChatContext = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [select, setSelect] = useState(true);
  const [querySearch, setQuerySearch] = useState("");
  const [currentUser, setCurrentUser] = useState(0);

  useEffect(() => {
    Axios.get(api)
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((e) => console.log(e));
  }, []);

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
      }}
    >
      {children}
    </chatContext.Provider>
  );
};
