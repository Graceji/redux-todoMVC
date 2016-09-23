import { ADD_TODO, COMPLETED_ALL } from '../constants/ActionTypes';

const initialState = [{
  text: 'Use Redux',
  id: 0,
  completed: false
}];

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const maxId = state.reduce((max, curr) => {
        return max = max > curr.id ? max : curr.id; 
      }, 0);

      return [
        {
          text: action.text,
          id: maxId + 1,
          completed: false
        },
        ...state
      ];

    case COMPLETED_ALL:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }));

    default: 
      return state;
  }
}

export default todos;