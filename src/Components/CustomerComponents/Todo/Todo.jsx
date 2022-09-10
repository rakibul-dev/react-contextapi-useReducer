import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../../Contexts/TodoContext";
import { ADD_TODO } from "../../../Reducers/ActionTypes/TodoActionTypes";
const Todo = () => {
  const { addTodo, todos, ohe } = useContext(TodoContext);
  return (
    <div>
      <h2>{ohe}</h2>
      <button
        onClick={() => {
          addTodo("i am todo");
          console.log("button clicked");
        }}
      >
        hello i am todo
      </button>
    </div>
  );
};

export default Todo;
