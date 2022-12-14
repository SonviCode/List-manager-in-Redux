import {
  ADD_DRAGON,
  CHANGE_STATUS_DRAGON,
  DELETE_DRAGON,
  MESSAGE_DRAGON,
  REVERSE_DRAGON,
} from "../../Constants/actions";

const initialState = {
  dragon: [{ drag_name: "Dracofeu", age: "20", status: "Taken ❌" }], //getItem || []
  message: "",
};

const reducerDragon = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_DRAGON:
      return {
        ...state,
        dragon: [
          ...state.dragon,
          {
            drag_name: action.drag_name,
            age: action.age,
            status: action.status,
          },
        ],
      };

    case CHANGE_STATUS_DRAGON:
      //boucle qui parcourt les dragons pour trouver LE bon dragon et modifier SON statut
      for (const el of state.dragon) {
        if (el.drag_name === action.drag_name) {
          if (el.status === "Free ✅") {
            el.status = "Taken ❌";
          } else {
            el.status = "Free ✅";
          }
        }
      }
      return {
        ...state,
        dragon: [...state.dragon],
      };

    case MESSAGE_DRAGON:
      return { ...state, message: action.value };

    case DELETE_DRAGON:
      return {
        ...state,
        dragon: state.dragon.filter((el) => el !== action.value),
      };

    case REVERSE_DRAGON:
      return {
        ...state,
        drag_name: state.dragon.reverse(),
      };

    default:
      return state;
  }
};

export default reducerDragon;
