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
  CHANGE_STATUS_DRAGON,
  ADD_LOG,
  DELETE_LOGS,
} from "../../Constants/actions.js";

// ---------------DRAGON----------------------
export const addDragon = (drag_name, age, status) => {
  return { type: ADD_DRAGON, drag_name: drag_name, age: age, status: status };
};

export const changeStatusDragon = (drag_name) => {
  return { type: CHANGE_STATUS_DRAGON, drag_name: drag_name };
};

export const messageDragon = (value) => {
  return { type: MESSAGE_DRAGON, value: value };
};

export const deleteDragon = (el) => {
  return { type: DELETE_DRAGON, value: el };
};

export const reverseDragon = () => {
  return { type: REVERSE_DRAGON };
};

// ---------------KNIGHT------------------
export const addKnight = (knight_name, age, dragonForKnight) => {
  return {
    type: ADD_KNIGHT,
    knight_name: knight_name,
    age: age,
    dragonForKnight: dragonForKnight,
  };
};

export const messageKnight = (value) => {
  return { type: MESSAGE_KNIGHT, value: value };
};

export const deleteKnight = (el) => {
  return { type: DELETE_KNIGHT, value: el };
};

export const reverseKnight = () => {
  return { type: REVERSE_KNIGHT };
};

export const connectDragonToKnight = () => {
  return { type: CONNECT_KNIGHT_TO_DRAGON };
};

// ---------------LOG---------------

export const addLog = (value) => {
  return { type: ADD_LOG, value: value };
};

export const deleteLogs = () => {
  return { type: DELETE_LOGS };
};
