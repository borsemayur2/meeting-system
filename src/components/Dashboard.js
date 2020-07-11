import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div >
        <Link
          style={{
            margin: 10,
            padding: 10,
            boxShadow: "0 0 10px 2px lightgrey",
          }}
          to="/users"
        >
          Schedule Meeting
        </Link>
        <Link
          style={{
            margin: 10,
            padding: 10,
            boxShadow: "0 0 10px 2px lightgrey",
          }}
          to="/meetings"
        >
          View Scheduled Meetings
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
