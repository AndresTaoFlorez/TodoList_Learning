import { useContext } from 'react'
import { TodoListContext } from '../context/TodoListContext'
import { TodosLoading } from './TodosLoading'
import { TodoItem } from './TodoItem'
import '../styles/TodoItems.scss'

const TodoItems = () => {
  const { itemsFinded: todos, loading, errors, config } = useContext(TodoListContext)
  return (
    <>
      <TodosLoading />
      {(!loading && !errors) && (
        <ul className="TodoItems">
          {
            todos.length ? (
              todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
              ))
            ) : <h2>{config?.pharagraph[3]}</h2>
          }
        </ul>
      )}
    </>)
}
export { TodoItems }