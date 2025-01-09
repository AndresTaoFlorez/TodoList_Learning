import { createContext, useEffect, useState } from "react";
import { useItems } from "../../../customHooks/useItems";
import { pharagraph } from '../text/pharagraphArray'

const TodoListContext = createContext()

const TodoListProvider = ({ children }) => {

  const [config, setConfig] = useState()

  useEffect(() => {
    setConfig({
      pharagraph: pharagraph.EN.map(obj => Object.values(obj)[0]) || ''
    });
  }, [])

  const {
    handleComplete = () => { },
    handleDelete = () => { },
    handleSearch = () => { },
    handleAdd = () => { },
    itemsFinded: todos = [],
    loading = false,
    errors = null
  } = useItems()

  return (
    <TodoListContext.Provider value={{
      handleComplete,
      handleDelete,
      handleSearch,
      handleAdd,
      itemsFinded: todos,
      loading,
      errors,
      config
    }}>
      {children}
    </TodoListContext.Provider>
  )
}

export { TodoListContext, TodoListProvider }