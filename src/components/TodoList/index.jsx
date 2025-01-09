import { TodoCounter } from "./components/TodoCounter.jsx";
import { TodoSearch } from "./components/TodoSearch.jsx";
import { TodoItems } from "./components/TodoItems.jsx";
import { AddTodo } from "./components/AddTodo.jsx";
import { TodosError } from "./components/TodosError.jsx";
import './styles/TodoList.scss'

function TodoList() {

  return (
    <div className="TodoList">
      <section className="TodoList__header">
        <TodoSearch />
        <TodoCounter />
      </section>
      <AddTodo />
      <TodosError />
      <TodoItems />
    </div>
  );
}

export default TodoList;
