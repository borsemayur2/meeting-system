import React from "react";
import "./BusySlots.css";
import DateTimePicker from "./DateTimePicker";

const BusySlots = () => {
  return (
    <div className="busySlots-container">
      <h1>Set Busy Slots</h1>
      <DateTimePicker multiSelectSlots={true} />
    </div>
  );
};

export default BusySlots;
