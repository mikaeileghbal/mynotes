import React, { useEffect, useState } from "react";
import { useTodoContext } from "../api/DataProvider";
import FormStyles from "./styles/FormStyles";

const Form = () => {
  const [fields, setFields] = useState({
    todo: "",
  });

  const { add } = useTodoContext();

  const onInputChange = (event) => {
    const newFields = { ...fields, [event.target.name]: event.target.value };
    setFields(newFields);
  };

  const handleAdd = () => {
    const newTodo = {
      text: fields.todo,
      done: false,
    };
    add(newTodo);
    setFields({ ...fields, todo: "" });
  };

  useEffect(() => {
    //console.log(fields);
  });

  return (
    <FormStyles>
      <h1>My TODO List</h1>
      <form>
        <label htmlFor="todo">Todo</label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={fields.todo}
          onChange={onInputChange}
        />
        <button type="button" onClick={handleAdd}>
          Save
        </button>
      </form>
    </FormStyles>
  );
};

export default Form;
