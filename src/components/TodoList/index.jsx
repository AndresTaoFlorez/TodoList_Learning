import { useEffect, useRef, useState } from 'react';
import { TodoCounter } from "./components/TodoCounter.jsx";
import { TodoSearch } from "./components/TodoSearch.jsx";
import { TodoItems } from "./components/TodoItems.jsx";
import { AddTodo } from "./components/AddTodo.jsx";
import { View } from "./components/View.jsx";
import { TodosError } from "./components/TodosError.jsx";
import { useGetBodySize } from '../../customHooks/useGetBodySize.jsx';
import "./styles/TodoList.scss";

function TodoList() {
  const { height, width } = useGetBodySize();
 

  return (
    <div className="TodoList">
      <section className="TodoList__picture" />
      <section className="TodoList__header">
        <TodoSearch />
        <TodoCounter />
      </section>
      <TodosError />
      <div className="TodoList__body">
        <AddTodo />
        <View />
        <TodoItems />
      </div>

      {/* Indicator */}
      <section className="sizeIndicator">
        {`width: ${width}, height: ${height}`}
      </section>
    </div>
  );
}

export default TodoList;
