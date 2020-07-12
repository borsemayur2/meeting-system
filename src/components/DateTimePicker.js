import React, { useState, useEffect } from "react";
import "./DateTimePicker.css";
import { timeSlots, dateSlots } from "../utils/DateTimeSlotsGenerator";
import {
  getBusySlots,
  addBusySlot,
  updateBusySlot,
} from "../actions/busySlotsActions";
import { connect } from "react-redux";

const DateTimePicker = (props) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState([]);
  useEffect(() => {
    props.getBusySlots();
  }, []);

  const addBusySlot = () => {
    const busyData = { [date]: time };
    props.addBusySlot(
      busyData,
      (data) => {
        props.getBusySlots();
        setTime([]);
      },
      (error) => {
        alert("Error occured during action. Please refresh the page");
      }
    );
  };

  const updateBusySlot = () => {
    const busyData = { ...busySlot, [date]: [...time, ...busySlot[date]] };
    props.updateBusySlot(
      busyData,
      (data) => {
        props.getBusySlots();
        setTime([]);
      },
      (error) => {
        alert("Error occured during action. Please refresh the page");
      }
    );
  };

  const busySlot = props.busySlots.find((busySlot) => busySlot[date]);

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
                  props.multiSelectSlots
                    ? setTime([...time, _time])
                    : setTime([_time])
                }
                style={{
                  background: time.includes(_time)
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

      {props.multiSelectSlots
        ? Boolean(time.length) && (
            <span
              className="busySlots-button"
              onClick={busySlot ? updateBusySlot : addBusySlot}
            >
              Mark Busy
            </span>
          )
        :


      date && Boolean(time.length) && props.location.state?.user && (
        <div className="scheduler-form-container">
          <textarea
            placeholder="Enter Meeting Description"
            className="scheduler-form-textbox"
            cols={10}
            rows={10}
            {...props.descriptionProps}
          />
          <div className="scheduler-form-button" onClick={()=>{
            props.scheduleMeeting(date,time[0],
            busySlot ? updateBusySlot : addBusySlot
            )
            }}>
            Send Request
          </div>
        </div>
      )

        }
    </>
  );
};

const mapStateToProps = ({ busySlots }) => ({ busySlots });
const mapDispatchToProps = { getBusySlots, addBusySlot, updateBusySlot };
export default connect(mapStateToProps, mapDispatchToProps)(DateTimePicker);
