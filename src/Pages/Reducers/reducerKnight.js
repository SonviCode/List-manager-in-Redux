import {
  ADD_KNIGHT,
  DELETE_KNIGHT,
  MESSAGE_KNIGHT,
  REVERSE_KNIGHT,
  CONNECT_KNIGHT_TO_DRAGON,
} from "../../Constants/actions";

const initialState = {
  knight: [{ knight_name: "TomMessage", age: "24" }],
  message: "",
};

const reducerKnight = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_KNIGHT:
      return {
        ...state,
        knight: [...state.knight, { knight_name: action.knight_name, age: action.age }],
      };
    case MESSAGE_KNIGHT:
      return { ...state, message: action.value };
    case DELETE_KNIGHT:
      return {
        ...state,
        knight: state.knight.filter((el) => el !== action.value),
      };
    case REVERSE_KNIGHT:
      return {
        ...state,
        name: state.knight.reverse(),
      };
    case CONNECT_KNIGHT_TO_DRAGON:
      return {
        ...state,
        name: state.knight.reverse(),
      };

    default:
      return state;
  }
};

export default reducerKnight;
