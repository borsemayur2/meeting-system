import React, { useEffect } from "react";
import "./Meetings.css";
import { connect } from "react-redux";
import { getMeetings } from "../actions/meetingsActions";
import { getUsers } from "../actions/usersActions";

const Meetings = (props) => {
  useEffect(() => {
    props.getUsers();
    props.getMeetings();
  }, []);

  if (!props.meetings.length) return <h2>No meetings scheduled</h2>;
  if (!props.users.length) return <h2>No users found</h2>;

  return (
    <>
      <h1 className="meeting-header">Meetings</h1>
      <div>
        {props.meetings.map((meeting) => {
          const user = props.users.find((user) => user.id === meeting.user);
          return (
            <div className="meeting-card">
              <div className="meeting-card-header">
                <span>{`${meeting.time}, ${meeting.date}`}</span>
                <span></span>
              </div>
              <div className="meeting-card-body" key={meeting.id}>
                <div>
                  {user.name} <span>( {user.role} )</span>
                </div>
                <div>{meeting.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = ({ meetings, users }) => ({ meetings, users });

const mapDispatchToProps = {
  getMeetings,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Meetings);
