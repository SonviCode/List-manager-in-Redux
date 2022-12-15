const initialState = {
  dragon: [{ name: "Dracofeu", age: "20" }],
  message: "",
};

const reducerKnight = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        dragon: [...state.dragon, { name: action.name, age: action.age }],
      };
    case MESSAGE:
      return { ...state, message: action.value };
    case DELETE:
      return {
        ...state,
        dragon: state.dragon.filter((el) => el !== action.value),
      };
    case REVERSE:
      return {
        ...state,
        name: state.dragon.reverse(),
      };
    case CONNECT_KNIGHT_TO_DRAGON:
      return {};

    default:
      return state;
  }
};

export default reducerKnight;
