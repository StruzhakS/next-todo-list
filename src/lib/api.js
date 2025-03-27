import axios from "axios";
import { nanoid } from "nanoid";
import { BASE_URL } from "./config";

export const getToDoItems = async (limit) => {
  const { data } = await axios(`${BASE_URL}?_limit=${limit}`);
  return data;
};

export const createToDoItem = async (todo) => {
  const { data } = await axios.post(BASE_URL, todo);
  return { ...data, id: nanoid() };
};

export const deleteTodo = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return id;
};