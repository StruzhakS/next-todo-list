import { useEffect, useState } from "react";
import s from "./CreateTodoModal.module.css";
import { createToDoItem } from "@/lib/api";
import Button from "../button/Button";

const CreateTodoModal = ({ isOpen, onClose, todos, setTodos }) => {
  const [todoName, setNameTodo] = useState(null);

  const todo = {
    title: todoName,
    completed: false,
  };

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  if (!isOpen) return null;

  const createNewTodo = async (todo) => {
    if (todoName.length < 5) {
      alert(
        "Please enter the name of the task. The name must be at least 5 characters long"
      );
      return;
    }
    const newTodo = await createToDoItem(todo);
    setTodos(() => {
      return [newTodo, ...todos];
    });
    setNameTodo("");
    onClose();
  };

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <Button text={"✖"} onClick={onClose} styles={s.close} />

        <div className={s.inputContainer}>
          <input
            type="text"
            required=""
            placeholder="Task title"
            onChange={(e) => setNameTodo(e.target.value)}
          />
        </div>

        <div className={s.buttonWrapper}>
          <Button
            onClick={() => createNewTodo(todo)}
            text={"Add"}
            styles={s.addButton}
          />
          <Button onClick={onClose} text={"Close"} styles={s.closeButton} />
        </div>
      </div>
    </div>
  );
};

export default CreateTodoModal;
