import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Users from "../components/Users";
import Meetings from "../components/Meetings";
import Scheduler from "../components/Scheduler";
import BusySlots from "../components/BusySlots";

const Routes = () => {
  return (
    <Router>
      <div>
        <Link style={{ margin: 10 }} to="/">
          Dashboard
        </Link>
        <Link style={{ margin: 10 }} to="/users">
          Users
        </Link>
        <Link style={{ margin: 10 }} to="/scheduler">
          Scheduler
        </Link>
        <Link style={{ margin: 10 }} to="/meetings">
          Meetings
        </Link>
        <Link style={{ margin: 10 }} to="/busyslots">
          BusySlots
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/users" component={Users} />
        <Route path="/meetings" component={Meetings} />
        <Route path="/scheduler" component={Scheduler} />
        <Route path="/busyslots" component={BusySlots} />
      </Switch>
    </Router>
  );
};

export default Routes;
