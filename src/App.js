import React from "react";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import { AppLayout } from "./Components/AppLayout/AppLayout";
import { Chat } from "./Pages/Chat/Chat";
import { Component } from "./Pages/Component";
import { ChatContext } from "./ChatContext";

function App() {
  return (
    <ChatContext>
      <AppLayout>
        <div className="layout">
          <Switch>
            <Route exact path="/taskandchat" component={Chat} />
            <Route exact path="/component" component={Component} />
            <Redirect from="/*" to="/component" />
          </Switch>
        </div>
      </AppLayout>
    </ChatContext>
  );
}

export default App;
