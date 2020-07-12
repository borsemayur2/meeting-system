import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMeetings } from "../actions/meetingsActions";
import { getUsers } from "../actions/usersActions";

const Meetings = (props) => {

  useEffect(() => {
    props.getUsers();
    props.getMeetings();
  }, []);


  return (
    <>
      <h1>Meetings</h1>
      <div style={{}}>
        {props.meetings.length && props.users.length &&
          props.meetings.map((meeting) => {
            const user = props.users.find(user=>user.id === meeting.user);
            return (
              <div key={meeting.id} style={{display:"flex",justifyContent:"space-evenly"}}>
                <span>Date: {meeting.date}</span>
                <span>Time: {meeting.time}</span>
                <span>ID: {meeting.id}</span>
                <span>User Name: {user.name}</span>
                <span>User Role: {user.role}</span>
                <span>Description: {meeting.desc}</span>
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
