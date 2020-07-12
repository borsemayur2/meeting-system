import React from "react";
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
      <h2>
        <span style={{ color: "darkblue", margin: 10 }}>
          {date} {time}
        </span>
      </h2>
      <h3>Select Date</h3>
      <div
        style={{
          boxShadow: "0 0 12px 2px lightgrey",
          margin: 10,
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        {dateSlots.map((_date) => (
          <span
            key={_date}
            onClick={() => setDate(_date)}
            style={{
              margin: 20,
              padding: 20,
              background: _date === date ? "lightgrey" : "",
              fontSize: 24,
              borderRadius: "1em",
              boxShadow: "0 0 12px 2px lightgrey",
              color: _date === date ? "white" : "black",
            }}
          >
            {_date}
          </span>
        ))}
      </div>
      {date && (
        <>
          <h3>Select Time</h3>
          <div
            style={{
              margin: 10,
              padding: 10,
              display: "flex",
              flexFlow: "row wrap",
              boxShadow: "0 0 12px 2px lightgrey",
            }}
          >
            {timeSlots.map((_time) => (
              <button
                key={_time}
                disabled={busySlot && busySlot[date].includes(_time)}
                onClick={() =>
                  multiSelectSlots ? setTime([...time, _time]) : setTime(_time)
                }
                style={{
                  margin: "10px 12px",
                  padding: 20,
                  background: multiSelectSlots
                    ? time.includes(_time)
                      ? "lightgrey"
                      : ""
                    : _time === time
                    ? "lightgrey"
                    : "",
                  fontSize: 20,
                  borderRadius: "1em",
                  boxShadow: "0 0 12px 2px lightgrey",
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
