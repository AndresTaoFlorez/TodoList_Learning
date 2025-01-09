
import { useContext } from "react"
import { TodoListContext } from "../context/TodoListContext"
const TodosError = () => {
  const { error } = useContext(TodoListContext)
  return (<>
    {error && (
      <div>
        <h1>Error</h1>
      </div>
    )}
  </>
  )
}
export { TodosError }