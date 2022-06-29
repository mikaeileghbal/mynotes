import React, { useEffect, useState } from "react";
import { FaPen, FaSave } from "react-icons/fa";
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
      <div className="form-wrapper">
        <form>
          <input
            type="text"
            name="todo"
            id="todo"
            value={fields.todo}
            onChange={onInputChange}
            placeholder="Take a note..."
          />
          <button type="button" onClick={handleAdd} className="btn">
            <FaPen />
          </button>
        </form>
      </div>
    </FormStyles>
  );
};

export default Form;
