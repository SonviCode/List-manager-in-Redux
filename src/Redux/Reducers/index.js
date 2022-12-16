import { combineReducers } from "redux";
import reducerDragon from "./reducerDragon";
import reducerKnight from "./reducerKnight";
import reducerLog from "./reducerLog";

export default combineReducers({
  reducerDragon: reducerDragon,
  reducerKnight: reducerKnight,
  reducerLog: reducerLog,
});
