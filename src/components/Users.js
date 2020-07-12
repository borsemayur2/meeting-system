import React, { useEffect } from "react";
import "./Users.css";
import { getUsers } from "../actions/usersActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Users = (props) => {
  useEffect(() => {
    props.getUsers();
  }, []);

  if (!props.users.length) return <h2>No Users found</h2>;

  return (
    <>
      <h1 className="user-header">Users</h1>
      {props.users.map((user, index) => (
        <div className="user-row" key={index + user.id}>
          {user.name}
          <Link
            className="user-meet-button"
            to={{ pathname: "/scheduler", state: { user } }}
          >
            Meet
          </Link>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
