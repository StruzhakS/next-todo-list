"use client";

import React from "react";
import { useEffect, useState } from "react";
import Todo from "../todo/Todo";
import QuantityOfTodos from "../quantityOfTodos/QuantityOfTodos";
import { getToDoItems } from "@/lib/api";
import AddTodo from "../addTodo/AddTodo";
import s from "./AllTodos.module.css";
import Loader from "../loader/Loader";

const AllTodos = () => {
  const [todos, setTodos] = useState([]);
  const [limit, setLimit] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const getAllTodos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getToDoItems(limit);
        setTodos(data);
      } catch (err) {
        setError("Failed to fetch todos. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    getAllTodos();
  }, [limit]);

  console.log(isLoading);

  return (
    <div className={s.container}>
      <QuantityOfTodos setLimit={setLimit} />
      <AddTodo
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        todos={todos}
        setTodos={setTodos}
      />

      {isLoading && <Loader/>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!isLoading && !error && (
        <ul className={s.todoList}>
          {todos.map((todo, idx) => (
            <Todo key={idx} todo={todo} todos={todos} setTodos={setTodos} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllTodos;
