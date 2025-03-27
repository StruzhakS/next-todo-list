import React from "react";
import s from "./QuantityOfTodos.module.css";
import { options } from "@/lib/config";

const QuantityOfTodos = ({ setLimit }) => (
  <div className={s.selectWrapper}>
    <h3>Quantity of tasks</h3>
    <select onChange={(e) => setLimit(e.target.value)} className={s.select}>
      {options.map((num) => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </select>
  </div>
);

export default QuantityOfTodos;
