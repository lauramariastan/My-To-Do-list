import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Edit Task"
      />
      <button type="submit" className="todo-btn">
        Edit Task
      </button>
    </form>
  );
};

export default EditTodoForm;
