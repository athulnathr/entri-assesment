import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NotFound from "./404";

const Pages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Pages;
