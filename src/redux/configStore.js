import { configureStore } from '@reduxjs/toolkit';

const TODO_ADD_BUTTON = "TODO_ADD_BUTTON";
const TODO_DELETE_BUTTON = "TODO_DELETE_BUTTON";
const ISDONE_CHANGE_BUTTON = "ISDONE_CHANGE_BUTTON";
const TODO_DETAIL_ID = "TODO_DETAIL_ID";

export const todoAddButton = (payload) => {
    return {type: TODO_ADD_BUTTON, payload}
};

export const todoDeleteButton = (payload) => {
    return {type: TODO_DELETE_BUTTON, payload}
};

export const isDoneChange = (payload) => {
    return {type: ISDONE_CHANGE_BUTTON, payload}
};

export const todoId = (payload) => {
    return {type: TODO_DETAIL_ID, payload}
};

export default configureStore({
  reducer: { }
}) 