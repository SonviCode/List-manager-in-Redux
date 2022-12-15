import {
  ADD_DRAGON,
  MESSAGE_DRAGON,
  DELETE_DRAGON,
  REVERSE_DRAGON,
  ADD_KNIGHT,
  MESSAGE_KNIGHT,
  DELETE_KNIGHT,
  REVERSE_KNIGHT,
  CONNECT_KNIGHT_TO_DRAGON,
} from "../Constants/actions.js";

// ------DRAGON-----
export const addDragon = (drag_name, age) => {
    return { type: ADD_DRAGON, drag_name: drag_name, age:age };
};

export const messageDragon = (value) => {
    return { type: MESSAGE_DRAGON, value: value};
};

export const deleteDragon = (el) => {
    return { type: DELETE_DRAGON, value:el };
};

export const reverseDragon = () => {
    return { type: REVERSE_DRAGON};
};

// ------KNIGHT-----
export const addKnight = (knight_name, age) => {
    return { type: ADD_KNIGHT, knight_name: knight_name, age:age };
};

export const messageKnight = (value) => {
    return { type: MESSAGE_KNIGHT, value: value};
};

export const deleteKnight = (el) => {
    return { type: DELETE_KNIGHT, value:el };
};

export const reverseKnight = () => {
    return { type: REVERSE_KNIGHT};
};


export const connectDragonToKnight = () => {
    return { type: CONNECT_KNIGHT_TO_DRAGON };
};
