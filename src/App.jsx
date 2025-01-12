import TodoList from './components/TodoList/index.jsx'
import { TodoListProvider } from './components/TodoList/context/TodoListContext.jsx'
import "./styles/App.scss";

function App() {

  return (
    <div className="App">
      <TodoListProvider>
        <TodoList />
      </TodoListProvider>
    </div>
  );
}

export default App;
