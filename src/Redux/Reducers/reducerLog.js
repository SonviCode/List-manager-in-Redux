import { ADD_LOG, DELETE_LOGS } from "../../Constants/actions";

const initialState = {
  log: [],
};

const reducerLog = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LOG:
      return {
        ...state,
        value: action.value,
        log: [...state.log, action.value],
      };
    case DELETE_LOGS:
      return {
        ...state,
        log: [],
      };
    default:
      return state;
  }
};

export default reducerLog;
