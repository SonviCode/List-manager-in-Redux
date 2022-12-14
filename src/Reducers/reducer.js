const initialState = {
  dragon: [{ name: "Dracofeu", age: "20" }],
  message: "",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        dragon: [...state.dragon, { name: action.name, age: action.age }],
      };
    case "message":
      return { ...state, message: action.value };
    case "delete":
      return {
        ...state,
        dragon: state.dragon.filter((el) => el !== action.value),
      };
    case "reverse":
      return {
        ...state,
        name: state.dragon.reverse(),
      };

    default:
      return state;
  }
};

export default reducer;
