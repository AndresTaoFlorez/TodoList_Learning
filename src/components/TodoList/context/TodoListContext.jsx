import { createContext, useEffect, useState } from "react";
import { useItems } from "../../../customHooks/useItems";
import { pharagraph } from '../text/pharagraphArray'
import { getLocalConfig, setLocalConfig } from "../../../services/localStorage";

const TodoListContext = createContext()

const TodoListProvider = ({ children }) => {

  const [config, setConfig] = useState()
  const [view, setView] = useState(getLocalConfig().view || false);

  useEffect(() => {
    setConfig({
      pharagraph: pharagraph.ES.map(obj => Object.values(obj)[0]) || ''
    });
  }, []);
  
  useEffect(() => {
    setLocalConfig({ items: { view } });
  }, [view]);
  

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
      config,
      setView,
      view
    }}>
      {children}
    </TodoListContext.Provider>
  )
}

export { TodoListContext, TodoListProvider }