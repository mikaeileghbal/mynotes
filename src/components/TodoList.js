import React from "react";
import { useTodoContext } from "../api/DataProvider";
import TodoStyles from "./styles/TodoStyles";

const TodoList = () => {
  const { todos } = useTodoContext();
  return (
    <TodoStyles>
      <div className="row">
        {todos.map((todo) => (
          <TodoItem key={todo.text} todo={todo} />
        ))}
      </div>
    </TodoStyles>
  );
};

export default TodoList;

const TodoItem = ({ todo }) => {
  const { edit, remove, setDone } = useTodoContext();

  return (
    <div>
      <div className="todo">
        <h4>{todo.text} </h4>
        <div className="footer">Reminder at 8:00 PM, Jun 19</div>
      </div>
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
  );
};
