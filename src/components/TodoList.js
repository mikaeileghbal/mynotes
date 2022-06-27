import React from "react";
import { useTodoContext } from "../App";
import TodoStyles from "./styles/TodoStyles";

const TodoList = () => {
  const { todos } = useTodoContext();
  return (
    <TodoStyles>
      <h3>Todo List</h3>
      {todos.map((todo) => (
        <TodoItem key={todo.text} todo={todo} />
      ))}
    </TodoStyles>
  );
};

export default TodoList;

const TodoItem = ({ todo }) => {
  const { edit, remove, setDone } = useTodoContext();

  return (
    <div className="todo">
      <h4>{todo.text} </h4>
      <div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => edit(todo.id)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => remove(todo.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
