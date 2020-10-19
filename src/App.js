import React from "react";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import { AppLayout } from "./Components/AppLayout/AppLayout";
import { Chat } from "./Pages/Chat/Chat";
import { ChatContext } from "./ChatContext";

function App() {
  return (
    <ChatContext>
      <AppLayout>
        <Switch>
          <Route exact path="/taskandchat" component={Chat} />
          <Redirect from="*" to="/taskandchat" />
        </Switch>
      </AppLayout>
    </ChatContext>
  );
}

export default App;
