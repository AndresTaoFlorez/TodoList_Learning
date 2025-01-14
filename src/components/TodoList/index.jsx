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
const background_picture_url = process.env.PUBLIC_URL + '/images/bg-todolist.jpg'

  return (
    <div className="TodoList" style={{ '--background-todolist': `url(${background_picture_url})` }}>
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
