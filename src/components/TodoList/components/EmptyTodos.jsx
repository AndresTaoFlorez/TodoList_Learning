import { useContext } from "react"
import { TodoListContext } from "../context/TodoListContext"
import { TodoItem } from "./TodoItem"

const EmptyTodos = () => {
  const todos = [{}, {}, {}, {}, {}]
  const { view } = useContext(TodoListContext)

  return (
    <>
      <div className={`TodoItems`} id='TodoItems'>
        <div className={`TodoItems__child TodoItems__${view ? 'flex' : 'grid'}`}>
          {todos.length ? (
            todos.length ? (
              todos.map((todo, index) => (
                <TodoItem key={index} customClass="emptyItems" />
              ))
            ) : <h2>No items founded</h2>
          ) : <h2>No items until</h2>
          }
        </div>
      </div>
    </>

  )

}

export { EmptyTodos }