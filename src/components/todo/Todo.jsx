import { deleteTodo } from "@/lib/api";
import React from "react";
import Button from "../button/Button";
import s from "./Todo.module.css";

const Todo = ({ todo, todos, setTodos }) => {
  const { id, title, completed } = todo;

  const deleteTodoById = (id) => {
    deleteTodo(id);
    setTodos(() => todos.filter((todo) => todo.id !== id));
  };

  return (
    <li className={s.listItem}>
      <div className={s.titleWrapper}>
        <h3 className={s.title}>{title}</h3>
        <Button
          text={"✖"}
          onClick={() => deleteTodoById(id)}
          styles={s.deleteButton}
        />
      </div>
      <div className={s.inputWrapper}>
        <label>Done: </label>
        <input
          type="checkbox"
          defaultChecked={completed}
          className={s.checkbox}
        />
      </div>
    </li>
  );
};

export default Todo;
