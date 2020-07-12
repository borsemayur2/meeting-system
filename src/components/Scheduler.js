import React, { useState } from "react";
import "./Scheduler.css";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import DateTimePicker from "./DateTimePicker";
import { addMeeting } from "../actions/meetingsActions";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};

const Scheduler = (props) => {
  const location = useLocation();
  const [descriptionProps, resetDescription] = useInput("");

  const scheduleMeeting = (date, time, callback) => {
    props.addMeeting(
      {
        user: location.state?.user?.id,
        description: descriptionProps.value,
        date,
        time,
      },
      (meetingData) => {
       console.log(meetingData);
       console.log("Meeting scheduled");
       callback();
      }
    );
    resetDescription();
  };

  if (!location.state?.user?.name) return <h2>Please select a user</h2>;

  return (
    <div>
      <h2 className="scheduler-header">
        Schedule Meet for {location.state?.user?.name}
      </h2>
      <DateTimePicker location={location} descriptionProps={descriptionProps} scheduleMeeting={scheduleMeeting} />
    </div>
  );
};


const mapDispatchToProps = { addMeeting };

export default connect(null, mapDispatchToProps)(Scheduler);
