import React from "react";
import CreateTodoModal from "../createTodoModal/CreateTodoModal";
import Button from "../button/Button";
import s from "./AddTodo.module.css";
const AddTodo = ({ setIsModalOpen, isModalOpen, todos, setTodos }) => {
  return (
    <div>
      <Button
        text={"Add task"}
        onClick={() => setIsModalOpen(true)}
        styles={s.button}
      />
      <CreateTodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default AddTodo;
