import React from "react";
import Home from "./pages/HomePage/Home";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <NotificationContainer />
    </BrowserRouter>
  );
}

export default App;
