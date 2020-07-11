import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getMeetings } from "../actions/meetingsActions";
import { getUsers } from "../actions/usersActions";
import {getSlots} from '../actions/slotsActions'

const Meetings = (props) => {
  const [meetings, setMeetings] = useState(props.meetings);

  useEffect(() => {
    props.getUsers();
    props.getSlots();
    props.getMeetings();
  }, []);

  useEffect(() => {
    setMeetings(props.meetings);
  }, [props.meetings]);

  return (
    <>
      <h1>Meetings</h1>
      <div style={{}}>
        {meetings.length && props.users.length && props.slots.length &&
          meetings.map((meeting) => {
            const user = props.users.find(user=>user.id === meeting.user);
            const slot = props.slots.find(slot=>slot.id === meeting.slot)
            return (
              <div key={meeting.id} style={{display:"flex",justifyContent:"space-evenly"}}>
                <span>Date: {slot.date}</span>
                <span>Time: {slot.time}</span>
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

const mapStateToProps = ({ meetings, users, slots }) => ({ meetings, users,slots });

const mapDispatchToProps = {
  getMeetings,
  getUsers,
  getSlots
};

export default connect(mapStateToProps, mapDispatchToProps)(Meetings);
