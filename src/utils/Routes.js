import React from "react";
import "./Routes.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Users from "../components/Users";
import Meetings from "../components/Meetings";
import Scheduler from "../components/Scheduler";
import BusySlots from "../components/BusySlots";

const Routes = () => {
  return (
    <Router>
      <div className="routes-container">
        <Link className="link" to="/users">
          Schedule Meeting
        </Link>
        <Link className="link" to="/meetings">
          View Scheduled Meetings
        </Link>
        <Link className="link" to="/busyslots">
          Mark busy slots
        </Link>
      </div>
      <div></div>
      <Switch>
        <Route exact path={["/", "/users"]} component={Users} />
        <Route path="/scheduler" component={Scheduler} />
        <Route path="/meetings" component={Meetings} />
        <Route path="/busyslots" component={BusySlots} />
      </Switch>
    </Router>
  );
};

export default Routes;
