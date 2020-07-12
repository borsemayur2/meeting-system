import React, { useEffect } from "react";
import { getUsers } from "../actions/usersActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Users = (props) => {

  useEffect(() => {
    props.getUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      {props.users.length &&
        props.users.map((user, index) => (
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
