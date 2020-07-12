import React, { useState, useEffect } from "react";
import DateTimePicker from "./DateTimePicker";
import {
  getBusySlots,
  addBusySlot,
  updateBusySlot,
} from "../actions/busySlotsActions";
import { connect } from "react-redux";

const BusySlots = (props) => {
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
        console.log("RES", data);
        props.getBusySlots();
      },
      (error) => {
        console.log("ERROR", error);
        alert("Error occured during action. Please refresh the page");
      }
    );
  };

  const updateBusySlot = () => {
    const busyData = {...busySlot, [date]: [...time,...busySlot[date]] };
    console.log(busySlot,busyData)

    props.updateBusySlot(
      busyData,
      (data) => {
        console.log("RES", data);
        props.getBusySlots();
      },
      (error) => {
        console.log("ERROR", error);
        alert("Error occured during action. Please refresh the page");
      }
    );
  };

  const busySlot = props.busySlots.find((busySlot) => busySlot[date]);

  return (
    <>
      <h1>BusySlots</h1>
      <DateTimePicker
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        multiSelectSlots={true}
        busySlot={busySlot}
      />

      {Boolean(time.length) && (
        <button onClick={busySlot ? updateBusySlot : addBusySlot}>
          Mark as busy
        </button>
      )}
    </>
  );
};

const mapStateToProps = ({ busySlots }) => ({ busySlots });
const mapDispatchToProps = { getBusySlots, addBusySlot, updateBusySlot };
export default connect(mapStateToProps, mapDispatchToProps)(BusySlots);
