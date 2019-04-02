import { combineReducers } from "redux";
import position from "./position";
import name from "./name";
import age from "./age";
import results from "./results";

export default combineReducers({
  position,
  name,
  age,
  results
});
