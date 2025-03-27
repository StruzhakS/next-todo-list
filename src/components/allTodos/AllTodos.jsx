"use client";

import React from "react";
import { useEffect, useState } from "react";
import Todo from "../todo/Todo";
import QuantityOfTodos from "../quantityOfTodos/QuantityOfTodos";
import { getToDoItems } from "@/lib/api";
import AddTodo from "../addTodo/AddTodo";
import s from "./AllTodos.module.css";

const AllTodos = () => {
  const [todos, setTodos] = useState([]);
  const [limit, setLimit] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getAllTodos = async () => {
      const data = await getToDoItems(limit);
      setTodos(data);
    };
    getAllTodos();
  }, [limit]);

  return (
    <div className={s.container}>
      <QuantityOfTodos setLimit={setLimit} />
      <AddTodo
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        todos={todos}
        setTodos={setTodos}
      />
      <ul className={s.todoList}>
        {todos.map((todo, idx) => (
          <Todo key={idx} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
};

export default AllTodos;
