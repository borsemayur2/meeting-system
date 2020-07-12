import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import meetingsReducer from "./meetingsReducer";
import busySlotsReducer from "./busySlotsReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  meetings: meetingsReducer,
  busySlots: busySlotsReducer,
});

export default rootReducer;
