import React, { useState, useEffect } from "react";
import { getUsers } from "../actions/usersActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Users = (props) => {
  const [users, setUsers] = useState(props.users);

  useEffect(() => {
    props.getUsers();
  }, []);

  useEffect(() => {
    setUsers(props.users);
  }, [props.users]);


  return (
    <>
      <h1>Users</h1>
      {users.length &&
        users.map((user, index) => (
          <div key={index + user.id}>
            {user.name}
            <span>
              <button>
                <Link to={{ pathname: "/scheduler", state: { user } }}>
                  Meet
                </Link>
              </button>
            </span>
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
