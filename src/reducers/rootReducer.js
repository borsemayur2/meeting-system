import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import meetingsReducer from "./meetingsReducer";
import slotsReducer from "./slotsReducer";
import busySlotsReducer from "./busySlotsReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  meetings: meetingsReducer,
  slots: slotsReducer,
  busySlots: busySlotsReducer,
});

export default rootReducer;
