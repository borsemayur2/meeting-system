import React from "react";
import moment from "moment";

const DateTimePicker = ({ time, setTime, date, setDate, slots }) => {
  const startDate = moment().subtract(3, "days");
  const endDate = moment().add(5, "days");
  let start = startDate.clone();
  const dateSlots = [];
  console.log("slots",slots)
  while (start <= endDate) {
    dateSlots.push(start.format("DD MMMM"));
    start = start.add(1, "days");
  }

  const timeSlots = [];

  for (let hour = 7; hour < 12; hour++) {
    timeSlots.push(moment({ hour }).format("h:mm A"));

    timeSlots.push(
      moment({
        hour,
        minute: 15,
      }).format("h:mm A")
    );

    timeSlots.push(
      moment({
        hour,
        minute: 30,
      }).format("h:mm A")
    );

    timeSlots.push(
      moment({
        hour,
        minute: 45,
      }).format("h:mm A")
    );
  }

  return (
    <>
      <h2>
        <span style={{ color: "darkblue", margin: 10 }}>
          {date} {time}
        </span>{" "}
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
              <input
              type="button"
                key={_time}
                onClick={() => setTime(_time)}
                style={{
                  margin: "10px 12px",
                  padding: 20,
                  background: _time === time ? "lightgrey" : "",
                  fontSize: 20,
                  borderRadius: "1em",
                  boxShadow: "0 0 12px 2px lightgrey",
                  color: _time === time ? "white" : "black",
                }}
                value={_time}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default DateTimePicker;
