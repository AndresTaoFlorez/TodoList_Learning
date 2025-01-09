import { useContext } from "react"
import { EmptyTodos } from "./EmptyTodos"
import { TodoListContext } from "../context/TodoListContext"

const TodosLoading = () => {
  const { loading } = useContext(TodoListContext)
  return (
    <>
      {loading && <EmptyTodos />}
    </>)
}

export { TodosLoading }