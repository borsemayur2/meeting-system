import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import meetingsReducer from "./meetingsReducer";
import slotsReducer from "./slotsReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  meetings: meetingsReducer,
  slots: slotsReducer,
});

export default rootReducer;
