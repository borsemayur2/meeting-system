import React from "react";
import "./DateTimePicker.css";
import { timeSlots, dateSlots } from "../utils/DateTimeSlotsGenerator";

const DateTimePicker = ({
  time,
  setTime,
  date,
  setDate,
  busySlot,
  multiSelectSlots = false,
}) => {
  return (
    <>
      <div className="dateslot-container">
        {dateSlots.map((_date) => (
          <span
            className="dateslot"
            key={_date}
            onClick={() => setDate(_date)}
            style={{
              background: _date === date ? "lightgrey" : "",
              color: _date === date ? "white" : "black",
            }}
          >
            {_date}
          </span>
        ))}
      </div>
      {date && (
        <>
          <div className="timeslot-container">
            {timeSlots.map((_time) => (
              <button
                className="timeslot"
                key={_time}
                disabled={busySlot && busySlot[date].includes(_time)}
                onClick={() =>
                  multiSelectSlots ? setTime([...time, _time]) : setTime(_time)
                }
                style={{
                  background: multiSelectSlots
                    ? time.includes(_time)
                      ? "lightgrey"
                      : ""
                    : _time === time
                    ? "lightgrey"
                    : "",
                  color: _time === time ? "white" : "black",
                }}
              >
                {_time}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default DateTimePicker;
