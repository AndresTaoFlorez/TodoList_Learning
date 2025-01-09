import { TodoItem } from "./TodoItem"

const EmptyTodos = () => {
  const todos = [{}, {}, {}, {}, {}]
  return (
    <>
      <div className="TodoItems">
        {todos.length ? (
          todos.length ? (
            todos.map((todo, index) => (
              <TodoItem key={index} customClass="emptyItems" />
            ))
          ) : <h2>No items founded</h2>
        ) : <h2>No items until</h2>
        }
      </div>
    </>

  )

}

export { EmptyTodos }