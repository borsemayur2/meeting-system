import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import DateTimePicker from "./DateTimePicker";
import { addMeeting } from "../actions/meetingsActions";
import { getBusySlots } from "../actions/busySlotsActions";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};

const Scheduler = (props) => {
  const location = useLocation();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [descriptionProps, resetDescription] = useInput("");

  useEffect(() => {
    props.getBusySlots();
  }, []);

  const scheduleMeeting = () => {
    props.addMeeting(
      {
        user: location.state?.user?.id,
        description: descriptionProps.value,
        date,
        time
      },
      (meetingData) => {
        console.log(meetingData);
        props.getBusySlots();
        alert("Meeting scheduled");
      }
    );
    resetDescription();
  };

  const busySlot = props.busySlots.find((busySlot) => busySlot[date]);

  if (!location.state?.user?.name) return <h2>Please select a user</h2>;

  return (
    <div>
      <h1>Schedule Meet for {location.state?.user?.name}</h1>
      <DateTimePicker
        user={location.state?.user || ""}
        time={time}
        setTime={setTime}
        date={date}
        setDate={setDate}
        busySlot={busySlot}
      />
      {date && time && location.state?.user && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <textarea
            placeholder="Enter Meeting Description"
            style={{ flex: 1 }}
            cols={5}
            rows={5}
            {...descriptionProps}
          />
          <button onClick={scheduleMeeting}>Send Request</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ slots, busySlots }) => ({ slots, busySlots });

const mapDispatchToProps = { addMeeting, getBusySlots };

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);
