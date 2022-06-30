import React, { useState } from "react";
import { FaEdit, FaTimes, FaSave } from "react-icons/fa";
import { useTodoContext } from "../api/DataProvider";
import { getNoteBackColor, NoteBackColor } from "../helper";
import TodoStyles, { TodoItemStyles } from "./styles/TodoStyles";

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
  const [editItem, setEditItem] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const { edit } = useTodoContext();

  const onEditClick = (item) => {
    if (editMode) {
      edit(editItem);

      setEditMode(false);
    } else {
      setEditMode(true);
      setEditItem(item);
    }
  };

  const onInputChange = (event) => {
    console.log(event.target.value);
    setEditItem({ ...editItem, text: event.target.value });
  };

  const { remove, setDone } = useTodoContext();

  const getEditButton = () => {
    if (editMode) return <FaSave />;
    return <FaEdit />;
  };

  return (
    <div className="wrapper">
      {editMode && (
        <TodoItemEdit todo={editItem} onInputChange={onInputChange} />
      )}
      {!editMode && <TodoItemDisplay todo={todo} />}
      <div className="button-wrapper">
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => onEditClick(todo)}
        >
          {getEditButton()}
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => remove(todo.id)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

function TodoItemDisplay({ todo }) {
  return (
    <TodoItemStyles bgColor={NoteBackColor.events}>
      <h4>{todo.text}</h4>
      <div className="footer">
        <span>Reminder at 8:00 PM, Jun 19</span>
      </div>
    </TodoItemStyles>
  );
}

function TodoItemEdit({ todo, onInputChange }) {
  return (
    <TodoItemStyles bgColor={NoteBackColor.events}>
      <textarea
        value={todo.text}
        name="text"
        onChange={(event) => onInputChange(event)}
        className="text"
      />
      <div className="footer">
        <span>
          Reminder at
          <input
            type="date"
            value="test"
            onChange={onInputChange}
            className="date"
          />
        </span>
      </div>
    </TodoItemStyles>
  );
}
