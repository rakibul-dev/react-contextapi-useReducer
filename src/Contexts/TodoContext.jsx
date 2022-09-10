import { createContext, useReducer } from "react";
import TodoReducer from "../Reducers/TodoReducer";
import { ADD_TODO } from "../Reducers/ActionTypes/TodoActionTypes";
const TodoContext = createContext();

const TodoContextState = (props) => {
  const initialState = {
    todos: [],
    ohe: "hello",
  };
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const addTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: todo });
  };
  return (
    <div>
      <TodoContext.Provider
        value={{ todos: state.todos, ohe: state.ohe, addTodo }}
      >
        {props.children}
      </TodoContext.Provider>
    </div>
  );
};

export { TodoContextState, TodoContext };
