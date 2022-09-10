import { ADD_TODO } from "./ActionTypes/TodoActionTypes";
const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ohe: action.payload,
      };

    default:
      return state;
  }
};

export default TodoReducer;
