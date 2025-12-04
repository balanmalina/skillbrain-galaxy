import React from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = (props) => {
  const handleCheckboxChange = (value) => {
    if (props.onToggle) {
      props.onToggle(value);
    }
  };

  return (
    <div className={`todo-item ${props.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox
            checked={!!props.completed}
            onChange={handleCheckboxChange}
          />
          <h4>{props.title}</h4>
        </div>
        <div>
          <i
            className="fa fa-pencil"
            aria-hidden="true"
            onClick={props.onEdit}
          ></i>

          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={props.onDelete}
          ></i>
        </div>
      </div>

      <div className="separator"></div>

      <p>{props.description}</p>
    </div>
  );
};

export default TodoItem;

