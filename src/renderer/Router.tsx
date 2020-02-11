import * as React from "react";
import { HashRouter, Route } from "react-router-dom";

import HomeView from "./views/HomeView";
import ScanningView from "./views/ScanningView";
import DetailView from "./views/DetailView";

const Router = () => {
  return (
    <HashRouter>
      <div>
        <Route path="/" exact component={HomeView} />
        <Route path="/devices" exact component={ScanningView} />
        <Route path="/device" exact component={DetailView} />
      </div>
    </HashRouter>
  );
};

export default Router;
