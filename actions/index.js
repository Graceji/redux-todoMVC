import * as actionTypes from '../constants/ActionTypes';

export function addTodo(text) {
  return {
    type: actionTypes.ADD_TODO,
    text
  }
}

export function deleteTodo(id) {
  return {
    type: actionTypes.DELETE_TODO,
    id
  }
}

export function completeAll() {
  return {
    type: actionTypes.COMPLETED_ALL
  }
}