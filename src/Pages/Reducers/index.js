import { combineReducers } from "redux";
import reducerDragon from "./reducerDragon";
import reducerKnight from "./reducerKnight";

export default combineReducers({
    reducerDragon: reducerDragon,
    reducerKnight: reducerKnight,
})